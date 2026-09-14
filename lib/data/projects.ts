export interface Project {
  slug: string;
  title: string;
  year: string;
  status: 'Completed' | 'In Progress' | 'Planning';
  tech: string[];
  summary: string;
  highlights: string[];
  github: string;
}

export const projects: Project[] = [
  {
    slug: 'rf-modulation-classifier',
    title: 'RF Modulation Classifier with Real-Time C++ Inference',
    year: '2026',
    status: 'Completed',
    tech: ['PyTorch', 'ONNX Runtime', 'C++'],
    summary:
      'A 1D CNN trained to classify radio modulation schemes in real time, exported to a high-performance C++ inference pipeline.',
    highlights: [
      'Trained a 2.2M-parameter 1D CNN on RadioML 2018.01A (2.55M IQ recordings, 24 modulation classes), achieving 92% accuracy above +10 dB SNR while characterizing performance across the full -20 to +30 dB range.',
      'Exported the model to ONNX Runtime and engineered a high-performance C++ inference pipeline sustaining 1,290 inferences/sec with 775 μs average latency, 1.7 ms p99 latency, and 1000/1000 prediction parity with PyTorch.',
      'Instrumented per-stage latency profiling and benchmarked multithreaded producer-consumer optimizations, demonstrating model execution accounted for 99.7% of inference time.',
    ],
    github: 'https://github.com/anshs527/rf-modulation-classifier',
  },
  {
    slug: 'nba-betting-analytics',
    title: 'NBA Sports Betting Analytics Plugin',
    year: '2025',
    status: 'Completed',
    tech: ['Python', 'PostgreSQL', 'Streamlit', 'NBA API'],
    summary:
      'A probabilistic prediction system for NBA player performance, backed by a normalized historical-games database.',
    highlights: [
      'Programmed a probabilistic prediction system for NBA player performance using weighted moving averages with exponential decay, incorporating opponent defensive ratings, rest-day adjustments, and home/away factors across 49,000+ historical games stored in a normalized PostgreSQL database with an 8-table schema.',
      'Designed a data pipeline integrating the NBA API with rate-limited requests, implementing efficient queries on 600+ players and 13+ statistical categories for real-time performance analysis.',
    ],
    github: 'https://github.com/anshs527/nba-betting-model',
  },
  {
    slug: 'rental-listing-scraper',
    title: 'Rental Property Listing Scraper',
    year: '2025',
    status: 'Completed',
    tech: ['Python', 'Cr4wl', 'Pandas'],
    summary: 'A scalable scraping pipeline that structures rental listings into JSON for automated ingestion.',
    highlights: [
      'Developed a scalable web scraping pipeline that extracted and structured 50,000+ rental listings into JSON for automated database ingestion, allowing for a 30% reduction in manual data entry.',
      'Reduced collection time by 40% through concurrent scraping, request optimization, and duplicate detection.',
    ],
    github: 'https://github.com/anshs527/peerstoragedata',
  },
];
