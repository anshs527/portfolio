export const profile = {
  name: 'Ansh Shah',
  currentTitle: 'Student Researcher – GNSS Systems',
  currentOrg: 'UIUC Financial Technology Lab',
  heroTagline:
    'Student Researcher – GNSS Systems at the UIUC Financial Technology Lab, building ML and systems software.',
  bio: [
    "I'm a Math and Computer Science student at UIUC. At the Financial Technology Lab, I work on GNSS receiver automation and positioning analysis.",
    "My other projects include a C++ radio-classification pipeline and a multi-exchange order-book service. I'm now developing a testbed for measuring latency in electronic trading systems. Outside of that, I like cooking and reading.",
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
