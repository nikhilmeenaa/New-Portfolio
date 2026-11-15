// Month arithmetic for "YYYY-MM" strings. Durations count both end months, the way LinkedIn does,
// so Jul 2024 – Oct 2026 reads "2 yrs 4 mos" here and there.

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const now = new Date();
export const thisMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

/** Months since Jan 2000; only differences matter. */
export function monthIndex(ym: string): number {
  const [y, m] = ym.split('-').map(Number);
  return (y - 2000) * 12 + (m - 1);
}

export function monthLabel(ym: string): string {
  const [y, m] = ym.split('-').map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

export function range(start: string, end: string | null): string {
  return `${monthLabel(start)} – ${end ? monthLabel(end) : 'Present'}`;
}

export function duration(start: string, end: string | null): string {
  const months = monthIndex(end ?? thisMonth) - monthIndex(start) + 1;
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts = [];
  if (y) parts.push(`${y} yr${y > 1 ? 's' : ''}`);
  if (m) parts.push(`${m} mo${m > 1 ? 's' : ''}`);
  return parts.join(' ');
}

export function longDate(ymd: string): string {
  const [y, m, d] = ymd.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}
