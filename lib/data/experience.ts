export interface ExperienceEntry {
  title: string;
  org: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: 'Trading Technology Research Assistant',
    org: 'UIUC Financial Technology Lab',
    location: 'Chicago, IL',
    start: 'Jun. 2026',
    end: 'Present',
    current: true,
    bullets: [
      'Developed the software pipeline for a GNSS timing receiver, automating u-blox configuration, 72-hour raw UBX capture, RINEX conversion, and Precise Point Positioning of 246K+ epochs across RTKLIB for beamforming.',
      'Benchmarked 9 filtering configurations over dual-frequency GPS L1/L5, Galileo E1/E5a, and BeiDou B2a observations, achieving 1.2 cm position accuracy for trade timestamp synchronization in HFT infrastructure.',
    ],
  },
  {
    title: 'Software Engineer',
    org: 'Future Leaders Initiative (Hack4Impact)',
    location: 'Champaign, IL',
    start: 'Jan. 2026',
    end: 'May 2026',
    current: false,
    bullets: [
      'Developed an offline-first child-safety incident reporting platform for UNICEF, spanning a Flutter mobile app, React/TypeScript admin dashboard, and FastAPI backend on Supabase Postgres.',
      'Built a full-stack analytics dashboard: designed REST endpoints, keyword search, and filtering across 5 provinces and 210 chiefdoms, rendering 5,000+ results in React with interactive charts, tables, and summary metrics.',
      'Engineered a client-side media metadata pipeline feeding an offline sync queue, with Alembic migrations and a Hive-backed queue screen for reports submitted without connectivity, reducing report processing time by 22%.',
    ],
  },
  {
    title: 'Software Engineer',
    org: 'National Organization for Business and Engineering',
    location: 'Urbana, IL',
    start: 'Sep. 2025',
    end: 'Dec. 2025',
    current: false,
    bullets: [
      'Built a full-stack apparel marketplace platform using Next.js, MongoDB, and Vercel with server-side rendering and optimized API routes across 10+ pages, enabling a student-to-student commerce platform.',
      'Designed a component-based UI system with Figma prototyping and Tailwind CSS implementation, reducing duplicate code by 35% through standardized design patterns and reusable interface components.',
    ],
  },
];
