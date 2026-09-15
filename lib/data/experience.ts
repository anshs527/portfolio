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
    title: 'Student Researcher – GNSS Systems',
    org: 'UIUC Financial Technology Lab',
    location: 'Chicago, IL',
    start: 'Jun. 2026',
    end: 'Present',
    current: true,
    bullets: [
      "Automated u-blox GNSS receiver configuration, raw UBX capture, RINEX conversion, and Precise Point Positioning (PPP) post-processing to evaluate antenna-position estimates for timing infrastructure.",
      "Compared RTKLIB filtering configurations using epoch retention, position scatter, and formal uncertainty; analyzed a separate 10,032-epoch capture with PPP solutions throughout the run.",
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
      "Developed features for FLI’s deployed child-safety reporting platform, used to collect incident data for UNICEF aid efforts, with a Flutter app, React/TypeScript dashboard, and FastAPI/PostgreSQL backend.",
      "Built REST endpoints and a React analytics dashboard with keyword search, geographic filters covering 5 provinces and 210 chiefdoms, and interactive charts and tables.",
      "Implemented client-side media-metadata handling and a Hive-backed offline report queue screen; added Alembic database migrations to support the reporting workflow.",
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
      "Built a student apparel marketplace with Next.js, MongoDB, and Vercel, implementing server-side rendering and API routes across more than 10 pages.",
      "Translated Figma prototypes into reusable Tailwind CSS components to standardize interfaces and consolidate duplicated UI code.",
    ],
  },
];
