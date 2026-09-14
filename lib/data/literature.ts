export interface LiteratureEntry {
  title: string;
  author: string;
  type: string;
  link?: string;
  note?: string;
  date: string;
}

// Placeholder entries — replace with real reading/writing history.
export const reading: LiteratureEntry[] = [
  {
    title: 'Sample Book Title',
    author: 'Author Name',
    type: 'Book',
    note: 'Short note on what stuck with you from this one.',
    date: '2026',
  },
];

export const writing: LiteratureEntry[] = [
  {
    title: 'Sample Essay Title',
    author: 'Ansh Shah',
    type: 'Essay',
    note: 'One-line summary of what this piece is about.',
    date: '2026',
  },
];
