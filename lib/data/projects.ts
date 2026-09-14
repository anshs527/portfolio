export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectFigure {
  src: string;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  status: 'Completed' | 'In Progress' | 'Planning';
  tech: string[];
  summary: string;
  highlights: string[];
  github: string;
  metrics?: ProjectMetric[];
  components?: string[];
  figures?: ProjectFigure[];
}

const RF_RAW = 'https://raw.githubusercontent.com/anshs527/rf-modulation-classifier/master/docs';

export const projects: Project[] = [
  {
    slug: 'rf-modulation-classifier',
    title: 'RF Modulation Classifier with Real-Time C++ Inference',
    year: '2026',
    status: 'Completed',
    tech: ['PyTorch', 'ONNX Runtime', 'C++', 'CMake'],
    summary:
      'A 1D CNN trained on raw IQ samples to classify 24 radio modulation schemes, exported to ONNX and served from a C++ pipeline whose predictions are validated to exact parity with PyTorch.',
    metrics: [
      { label: 'Accuracy above +10 dB SNR', value: '92%' },
      { label: 'C++ throughput', value: '1,290 inf/s' },
      { label: 'Mean latency', value: '775 μs' },
      { label: 'PyTorch parity', value: '1000 / 1000' },
    ],
    highlights: [
      'Trained a ~2.2M-parameter 1D CNN (four Conv1d → ReLU → MaxPool blocks) directly on raw IQ samples rather than spectrograms — magnitude spectrograms discard phase, and phase is exactly where PSK/QAM schemes encode information. Trained on the full RadioML 2018.01A dataset: 2.55M recordings, 24 modulation classes, −20 to +30 dB SNR.',
      'Reported accuracy as a curve over SNR rather than one aggregate number, since the aggregate (~55%) is close to meaningless without it: near chance below −15 dB, crossing 50% around 0 dB, and plateauing near 92% above +10 dB.',
      'Exported to ONNX Runtime and built a C++ inference pipeline validated to exact parity with PyTorch — 1000/1000 matching predictions — sustaining ~1,290 inferences/sec at 775 μs mean latency (1.7 ms p99) and 55 MB peak working set.',
      "Instrumented per-stage latency profiling: session.Run() alone accounts for 99.7% of inference time. Measured a two-thread producer/consumer pipelining variant as a follow-up — and reported it as a negative result: synchronization cost more than the ~1.4 μs of hideable work it was competing for, so it didn't help. The only real path to faster is inside the model (quantization, batching, a smaller head), not around it.",
    ],
    figures: [
      {
        src: `${RF_RAW}/accuracy_by_snr.png`,
        alt: 'Line chart of classification accuracy rising from near-chance at -20 dB SNR to about 92% above +10 dB',
        caption: 'Accuracy as a function of SNR — the curve that actually matters, not the aggregate.',
      },
      {
        src: `${RF_RAW}/confusion_matrix.png`,
        alt: '24x24 confusion matrix heatmap with a strong diagonal, showing where the model confuses adjacent QAM orders',
        caption: 'Confusion matrix across all 24 classes — most error mass sits between adjacent QAM orders.',
      },
      {
        src: `${RF_RAW}/latency_histogram.png`,
        alt: 'Histogram of C++ inference latency centered around 775 microseconds, plus a bar chart showing session.Run as 99.7% of time',
        caption: '1,000-sample C++ latency distribution, and where the time actually goes per inference.',
      },
      {
        src: `${RF_RAW}/constellation_qpsk.png`,
        alt: 'Three IQ constellation scatter plots of QPSK at 30dB, 10dB, and -10dB SNR, showing the clusters smearing into noise',
        caption: 'QPSK constellation at 30, 10, and −10 dB — the same signal, dissolving into noise.',
      },
    ],
    github: 'https://github.com/anshs527/rf-modulation-classifier',
  },
  {
    slug: 'nba-betting-analytics',
    title: 'NBA Sports Betting Analytics Platform',
    year: '2025',
    status: 'Completed',
    tech: ['Python', 'PostgreSQL', 'SQLAlchemy', 'Flask', 'Streamlit', 'NBA API'],
    summary:
      'A full research platform for NBA player-prop betting: a weighted-average prediction model, an expected-value parlay analyzer, a paper-trading workflow, and a browser extension. Built to explore why predicting performance is not enough to establish a betting edge.',
    metrics: [
      { label: 'Historical games', value: '49,000+' },
      { label: 'Players tracked', value: '600+' },
      { label: 'Database tables', value: '10' },
      { label: 'Stat categories', value: '13+' },
    ],
    components: ['Prediction engine', 'Parlay / EV analyzer', 'Paper-trading backtester', 'Browser extension', 'Data pipeline'],
    highlights: [
      'Built a weighted-moving-average prediction model with exponential recency decay over player game logs, adjusted for opponent defensive rating, rest days, and home/away — then modeled the outcome as normal and used the CDF to compute the probability of clearing a given sportsbook line.',
      'Converted that probability into expected value against standard −110 odds (break-even at ~52.4%), and built a multi-pick analyzer that computes joint probability and EV across multiple picks. Correlation between picks remains an important modeling limitation.',
      "Added a paper-trading system — bankroll tracking, ROI, and bankroll snapshots over time — to support evaluation against real lines. No documented backtest returns or profitability results are available.",
      'Shipped a Chrome extension that overlays live predictions in a sidebar directly on PrizePicks.com, backed by a Flask API serving the model.',
      'Designed a normalized 10-table PostgreSQL schema over SQLAlchemy (players, teams, defensive stats, game logs, paper-trading accounts, bets, parlays) and a rate-limited NBA API pipeline across 600+ players and 13+ statistical categories.',
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

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
