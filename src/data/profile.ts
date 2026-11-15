// Everything the page says lives here. Dates are "YYYY-MM"; an end of null means the role is ongoing.
// Sources: LinkedIn (experience, education), Google Play (app figures), GitHub (side projects),
// the LeetCode / Codeforces / CodeChef profiles, and Nikhil's own LinkedIn posts.

import stopx from '../assets/apps/stopx.png';
import befocussed from '../assets/apps/befocussed.png';
import brainn from '../assets/apps/brainn.png';
import kiddosafe from '../assets/apps/kiddosafe.png';

export const email = 'nikhilmeena809@gmail.com';

export const githubUser = 'nikhilmeenaa';

export const links = {
  github: `https://github.com/${githubUser}`,
  linkedin: 'https://www.linkedin.com/in/nikhil-meena-8152771a1/',
  martai: 'https://www.martai.in',
};

/** The day the Play Store figures below were read. Update it whenever the numbers change. */
export const playCheckedOn = '2026-11-15';

export interface App {
  name: string;
  /** What the listing is called on Google Play, when it differs from the brand. */
  playName?: string;
  does: string;
  play: string;
  icon: ImageMetadata;
  downloads: string;
  rating: number;
  reviews: string;
}

export const apps: App[] = [
  {
    name: 'StopX',
    playName: 'NoFap',
    does: 'Blocks porn in every browser and app, private tabs included, with a lock that stops it being uninstalled on a bad day.',
    play: 'https://play.google.com/store/apps/details?id=com.nofaphelper809',
    icon: stopx,
    downloads: '50K+',
    rating: 4.6,
    reviews: '2.38K',
  },
  {
    name: 'Be Focused',
    does: 'Blocks Reels, Shorts and any app or site you pick, and makes you pause before a limited app opens.',
    play: 'https://play.google.com/store/apps/details?id=com.befocussed809.app',
    icon: befocussed,
    downloads: '10K+',
    rating: 4.4,
    reviews: '396',
  },
  {
    name: 'Brainn',
    does: 'A study timer for exam aspirants. Blocks Reels and Shorts during a session and lets you study live with other students.',
    play: 'https://play.google.com/store/apps/details?id=com.brainn809.app',
    icon: brainn,
    downloads: '1K+',
    rating: 4.6,
    reviews: '44',
  },
  {
    name: 'Kiddo Safe',
    does: 'Parental controls that run on the child’s phone: block apps and adult sites, switch off Shorts, set time limits and a bedtime.',
    play: 'https://play.google.com/store/apps/details?id=com.kiddosafe.app',
    icon: kiddosafe,
    downloads: '1K+',
    rating: 4.2,
    reviews: '9',
  },
];

export const inTheWorks = [
  {
    name: 'UPI Alert',
    does: 'Reads out every UPI payment a shop receives, like a soundbox on the counter.',
    status: 'Coming soon',
  },
  {
    name: '10x Space',
    does: 'Compresses photos and videos on the phone overnight, without uploading them anywhere.',
    status: 'Closed testing',
  },
];

export interface Role {
  title: string;
  type: string;
  start: string;
  end: string | null;
}

export interface Job {
  company: string;
  url?: string;
  place: string;
  roles: Role[];
  /** Short label for the timeline figure. */
  short: string;
  summary?: string;
  showApps?: boolean;
}

export const work: Job[] = [
  {
    company: 'martai',
    url: 'https://www.martai.in',
    short: 'martai',
    place: 'Guna, Madhya Pradesh · Remote',
    roles: [{ title: 'Co-founder', type: 'Full-time', start: '2024-11', end: null }],
    summary: 'We build Android apps for focus and self-control. They block Reels and Shorts, adult sites, and any app you’ve put a limit on.',
    showApps: true,
  },
  {
    company: 'Finarb',
    url: 'https://finarb.com',
    short: 'Finarb',
    place: 'Kolkata, West Bengal · On-site',
    roles: [
      { title: 'SDE 1', type: 'Full-time', start: '2024-07', end: '2026-10' },
      { title: 'SDE Intern', type: 'Internship', start: '2024-01', end: '2024-07' },
    ],
    summary:
      'Worked across the stack on an AI product: FastAPI services and data pipelines, a data-heavy React frontend, and a sockets service for the real-time parts. Wrote more than 1,000 tests for it.',
  },
  {
    company: 'AutoText',
    short: 'AutoText',
    place: 'Delhi · Remote',
    roles: [{ title: 'SDE Intern', type: 'Internship', start: '2023-08', end: '2023-12' }],
    summary:
      'Worked on the social media integrations that publish posts automatically, a referral system, data pipelines for reporting, and the CI/CD setup.',
  },
  {
    company: 'CodeChef',
    url: 'https://www.codechef.com',
    short: 'CodeChef',
    place: 'Remote',
    roles: [{ title: 'Intern', type: 'Internship', start: '2022-11', end: '2023-05' }],
    summary:
      'Cleared data structures and competitive programming doubts for 80+ students, and mentored 25+ of them.',
  },
];

export const education: { school: string; short?: string; detail?: string; years: string; start?: string; end?: string }[] = [
  {
    school: 'Madhav Institute of Technology and Science, Gwalior',
    short: 'MITS',
    detail: 'B.Tech, Information Technology',
    years: '2020–2024',
    // Month precision for the timeline only; LinkedIn lists the years.
    start: '2020-08',
    end: '2024-06',
  },
  {
    school: 'Delhi Public School',
    years: '2016–2020',
  },
];

export interface Project {
  name: string;
  kind: string;
  year: number;
  does: string;
  links: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    name: 'YouTube Smart Filter',
    kind: 'Browser extension',
    year: 2025,
    does: 'Blurs clickbait and spam videos on YouTube using a small ML model, and shows why each one was hidden.',
    links: [
      { label: 'Site', href: 'https://slm-youtube-filter.nikhilmeena.com' },
      { label: 'Source', href: 'https://github.com/nikhilmeenaa/Youtube-Filter-SLM' },
    ],
  },
  {
    name: 'MCQ Generator',
    kind: 'Backend service',
    year: 2025,
    does: 'Turns a book (PDF, ePub or plain text) into multiple-choice questions with LLMs running locally on Ollama.',
    links: [{ label: 'Source', href: 'https://github.com/nikhilmeenaa/MCQ-Generator' }],
  },
  {
    name: '3D Chess',
    kind: 'Web game',
    year: 2025,
    does: 'Chess on a 3D board in the browser, built with three.js and chess.js.',
    links: [
      { label: 'Play', href: 'https://3-d-chess-iota.vercel.app' },
      { label: 'Source', href: 'https://github.com/nikhilmeenaa/3D-Chess' },
    ],
  },
  {
    name: 'LinkedIn Posts Filter',
    kind: 'Chrome extension',
    year: 2024,
    does: 'Hides everything in your LinkedIn feed except hiring posts. I made it while I was looking for a job.',
    links: [
      {
        label: 'Chrome Web Store',
        href: 'https://chromewebstore.google.com/detail/linkedin-posts-filter/lgjobdoomhngeepifkmdjfecdagnfcah',
      },
      { label: 'Source', href: 'https://github.com/nikhilmeenaa/linkedin-posts-filter-llm-and-static' },
    ],
  },
  {
    name: 'AI GitCommits',
    kind: 'VS Code extension',
    year: 2024,
    does: 'Reads your changes and writes the commit message for you with an LLM.',
    links: [{ label: 'Source', href: 'https://github.com/nikhilmeenaa/AI-GitCommits' }],
  },
  {
    name: 'Collaborative board',
    kind: 'Web app',
    year: 2023,
    does: 'A whiteboard with rooms. Everyone in a room draws on the same board and sees it update live.',
    links: [
      { label: 'Live (slow to wake up)', href: 'https://board-3254.onrender.com' },
      { label: 'Source', href: 'https://github.com/nikhilmeenaa/Collaborative-black-board' },
    ],
  },
  {
    name: 'AceType',
    kind: 'Web app',
    year: 2023,
    does: 'A typing practice site, built with Django.',
    links: [{ label: 'Source', href: 'https://github.com/nikhilmeenaa/Type-Ace' }],
  },
];

export interface Contest {
  name: string;
  href?: string;
  result: string;
  note?: string;
}

export const contests: Contest[] = [
  {
    name: 'ICPC',
    result: 'Amritapuri regionals, 2023, with team CODEMONK.',
    note: '201st in the online round that got us there.',
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/Nikhil_Meena/',
    result: 'Knight. Contest rating 2040, top 2.1%.',
  },
  {
    name: 'CodeChef',
    href: 'https://www.codechef.com/users/nikhil_meena',
    result: '5★, highest rating 2121. Global rank 33 of 3,500+ in Exun 2021–22.',
    note: 'CodeChef later re-rated past contests, so the profile now shows 1964.',
  },
  {
    name: 'Codeforces',
    href: 'https://codeforces.com/profile/nikhilkameena',
    result: 'Expert. Highest rating 1624.',
  },
  {
    name: 'Monkeytype',
    result: '175 wpm at 100% accuracy.',
  },
];

export const talks = [
  {
    title: 'Micro frontends',
    where: 'Kolkata MongoDB User Group meetup, Hyland, New Town',
    format: '15-minute lightning talk',
    date: '2025-04-19',
  },
];
