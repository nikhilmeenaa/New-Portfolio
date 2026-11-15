// The contribution calendar from GitHub's public profile page, read once at build time. It needs no token and
// includes private-repo contributions when the profile is set to show them. Visitors never call GitHub: the
// heatmap is baked into the HTML, so it's as fresh as the last deploy.

export interface Day {
  date: string;
  count: number;
  /** GitHub's own 0–4 intensity bucket. */
  level: number;
}

export interface Calendar {
  days: Day[];
  total: number;
  activeDays: number;
}

const attr = (tag: string, name: string) => tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];

export async function getCalendar(user: string): Promise<Calendar | null> {
  try {
    const res = await fetch(`https://github.com/users/${user}/contributions`, {
      headers: { 'User-Agent': 'nikhilmeena.com build' },
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();

    // Each day is a <td data-date data-level id>; its count lives in a <tool-tip for="that id">.
    const counts = new Map<string, number>();
    for (const [, id, text] of html.matchAll(/<tool-tip[^>]*?for="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
      counts.set(id, Number(text.match(/^(\d+) contribution/)?.[1] ?? 0));
    }

    const days: Day[] = [];
    for (const [tag] of html.matchAll(/<td[^>]*data-date="[^"]*"[^>]*>/g)) {
      const date = attr(tag, 'data-date')!;
      const id = attr(tag, 'id') ?? '';
      days.push({ date, level: Number(attr(tag, 'data-level') ?? 0), count: counts.get(id) ?? 0 });
    }
    if (days.length < 300) throw new Error(`only ${days.length} days parsed`);

    days.sort((a, b) => a.date.localeCompare(b.date));
    return {
      days,
      total: days.reduce((sum, d) => sum + d.count, 0),
      activeDays: days.filter((d) => d.count > 0).length,
    };
  } catch (error) {
    console.warn('[github] contribution calendar unavailable, leaving it out:', (error as Error).message);
    return null;
  }
}
