export const profile = {
  name: 'Ansh Shah',
  currentTitle: 'Trading Technology Research Assistant',
  currentOrg: 'UIUC Financial Technology Lab',
  heroTagline:
    'Trading Technology Research Assistant at the UIUC Financial Technology Lab, building ML and systems software.',
  bio: [
    "Hi, I'm Ansh — a Math and Computer Science student at UIUC. I work at the intersection of trading technology, signal processing, and applied machine learning: right now that means GNSS timing pipelines and beamforming research at the Financial Technology Lab, alongside personal projects in real-time ML inference and systems programming.",
    "When I'm not building, you'll find me experimenting with new recipes in the kitchen, reading, or contributing to open-source projects. I believe in continuous learning and sharing knowledge with the developer community.",
  ],
  whatIDo: [
    'Systems & ML engineering',
    'Real-time signal processing',
    'Full-stack application development',
    'Data pipelines & analytics',
  ],
  techTags: ['Python', 'C++', 'PyTorch', 'React', 'Next.js', 'TypeScript', 'PostgreSQL', 'FastAPI'],
  contact: {
    email: 'anshks2@illinois.edu',
    phone: '708-843-1130',
    linkedinHandle: 'anshs527',
    linkedinUrl: 'https://linkedin.com/in/anshs527',
    githubHandle: 'anshs527',
    githubUrl: 'https://github.com/anshs527',
    instagramHandle: 'ansh.s527',
    instagramUrl: 'https://instagram.com/ansh.s527',
  },
};

export const socials = [
  { label: 'GitHub', handle: `@${profile.contact.githubHandle}`, url: profile.contact.githubUrl },
  { label: 'LinkedIn', handle: `/in/${profile.contact.linkedinHandle}`, url: profile.contact.linkedinUrl },
  { label: 'Instagram', handle: `@${profile.contact.instagramHandle}`, url: profile.contact.instagramUrl },
  { label: 'Email', handle: profile.contact.email, url: `mailto:${profile.contact.email}` },
];
