// Project descriptions from the current downloadable resume.
export const resumeProjects = [
  {
    "slug": "rf-modulation-classifier",
    "title": "RF Classification and C++ Inference Benchmark",
    "year": "2026",
    "tech": [
      "PyTorch",
      "ONNX Runtime",
      "C++"
    ],
    "bullets": [
      "Trained a 2.2M-parameter CNN to classify 24 radio modulation types, achieving approximately 92% held-out accuracy above +10 dB SNR and evaluating performance across −20 to +30 dB.",
      "Exported the model to ONNX Runtime and benchmarked 1,000 single-sample CPU inferences in C++: 775 µs mean and 1.7 ms p99 prediction latency, with all predicted classes matching PyTorch.",
      "Profiled inference stages and evaluated producer–consumer threading; found model execution consumed 99.7% of measured processing time and synchronization overhead outweighed preprocessing overlap."
    ]
  },
  {
    "slug": "nba-betting-analytics",
    "title": "NBA Player Performance Analytics",
    "year": "2025",
    "tech": [
      "Python",
      "PostgreSQL",
      "Streamlit"
    ],
    "bullets": [
      "Built a player-performance estimation pipeline using exponentially weighted historical statistics with opponent, rest-day, and home/away adjustments; organized data in an eight-table PostgreSQL schema.",
      "Integrated NBA API data through rate-limited requests and database queries covering more than 600 players and 13 statistical categories for a Streamlit analytics application."
    ]
  }
];
