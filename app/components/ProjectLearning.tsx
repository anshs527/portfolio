'use client';

import { useState } from 'react';
import { Radio, ChartNoAxesCombined } from 'lucide-react';
import { MarketPipelineLearning, OptimizerLearning } from './TradingProjectLearning';

function SignalLab() {
  const [snr, setSnr] = useState(15);
  const [scheme, setScheme] = useState('QPSK');
  const symbols = scheme === 'BPSK' ? [[-1, 0], [1, 0]] : scheme === 'QPSK' ? [[-.707, -.707], [-.707, .707], [.707, -.707], [.707, .707]] : [-3, -1, 1, 3].flatMap(i => [-3, -1, 1, 3].map(q => [i / Math.sqrt(10), q / Math.sqrt(10)]));
  const noise = Math.sqrt(1 / (2 * 10 ** (snr / 10)));
  const points = Array.from({ length: 240 }, (_, i) => {
    const symbol = symbols[i % symbols.length];
    const u = ((i * 73 + 19) % 997 + 1) / 999;
    const v = ((i * 137 + 47) % 991 + 1) / 993;
    const radius = Math.sqrt(-2 * Math.log(u));
    return [180 + 80 * (symbol[0] + noise * radius * Math.cos(2 * Math.PI * v)), 180 - 80 * (symbol[1] + noise * radius * Math.sin(2 * Math.PI * v))];
  });
  return <div className="lab">
    <div className="flex items-center gap-2 font-bold"><Radio size={20} /> Explore a signal</div>
    <p>Choose a modulation scheme, then lower the signal-to-noise ratio. Watch distinct symbols become harder to tell apart.</p>
    <label htmlFor="modulation">Modulation</label>
    <select id="modulation" value={scheme} onChange={e => setScheme(e.target.value)}><option>BPSK</option><option>QPSK</option><option>16-QAM</option></select>
    <div className="grid sm:grid-cols-2 gap-6 items-center">
      <svg viewBox="0 0 360 360" role="img" aria-label={`${scheme} constellation at ${snr} decibels. Lower signal-to-noise ratios spread the received samples farther from their ideal symbols.`}>
        <defs><clipPath id="signal-plot"><rect x="20" y="20" width="320" height="320" rx="16" /></clipPath></defs>
        <path d="M20 180H340 M180 20V340" stroke="currentColor" opacity=".25" />
        <g clipPath="url(#signal-plot)">{points.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="2.5" fill="currentColor" opacity=".5" />)}
        {symbols.map(([i, q], n) => <circle key={n} cx={180 + i * 80} cy={180 - q * 80} r="6" fill="none" stroke="currentColor" strokeWidth="2" />)}</g>
        <text x="328" y="172" fill="currentColor" fontSize="13">I</text><text x="190" y="30" fill="currentColor" fontSize="13">Q</text>
      </svg>
      <div><label htmlFor="snr">Signal-to-noise ratio: {snr} dB</label><input id="snr" type="range" min="-10" max="30" value={snr} onChange={e => setSnr(Number(e.target.value))} />
        <div className="flex justify-between text-sm"><span>More noise</span><span>Cleaner signal</span></div>
        <p><strong>{Math.log2(symbols.length)} bits per symbol.</strong> {scheme === '16-QAM' ? 'More information per symbol, but closer neighbors at the same average signal power.' : 'Fewer symbols leave more space between possible messages.'}</p>
        <p className="text-sm">Illustrative normalized symbols with synthetic Gaussian noise. Outlying points are clipped to the plot. This is not the trained classifier or its measured accuracy.</p>
      </div>
    </div>
  </div>;
}

function OddsLab() {
  const [probability, setProbability] = useState(50);
  const [odds, setOdds] = useState(-110);
  const [legs, setLegs] = useState(1);
  const decimal = odds < 0 ? 1 + 100 / -odds : 1 + odds / 100;
  const p = (probability / 100) ** legs;
  const payout = decimal ** legs;
  const ev = 100 * (p * payout - 1);
  return <div className="lab">
    <div className="flex items-center gap-2 font-bold"><ChartNoAxesCombined size={20} /> The price of a prediction</div>
    <p>Change your assumed win probability and the offered odds. A good prediction only becomes positive expected value when the price is favorable.</p>
    <label htmlFor="probability">Assumed win probability per pick: {probability}%</label><input id="probability" type="range" min="30" max="75" value={probability} onChange={e => setProbability(Number(e.target.value))} />
    <div className="grid sm:grid-cols-2 gap-4"><div><label htmlFor="odds">American odds per pick</label><select id="odds" value={odds} onChange={e => setOdds(Number(e.target.value))}><option value={-150}>−150</option><option value={-110}>−110</option><option value={100}>+100</option><option value={150}>+150</option></select></div>
    <div><label htmlFor="legs">Number of independent picks</label><select id="legs" value={legs} onChange={e => setLegs(Number(e.target.value))}>{[1, 2, 3, 4, 5].map(n => <option key={n} value={n}>{n === 1 ? 'Single pick' : `${n}-pick parlay`}</option>)}</select></div></div>
    <div className="grid sm:grid-cols-2 gap-6 mt-8" aria-live="polite"><div><div className="lab-output">{ev >= 0 ? '+' : '−'}${Math.abs(ev).toFixed(2)}</div><p className="!mt-0">Expected net per $100 staked</p></div><div><div className="lab-output">{(p * 100).toFixed(1)}%</div><p className="!mt-0">Chance all picks win</p></div></div>
    <div className="formula">EV = $100 × [P(all win) × total decimal payout − 1]</div>
    <p className="text-sm">Break-even per pick: {(100 / decimal).toFixed(2)}%. This hypothetical example multiplies both independent probabilities and decimal payouts. Real same-game picks can be correlated, and platforms may use different payout rules. Positive calculated EV is only as reliable as the assumed probabilities; it is not a forecast or a measured project result.</p>
  </div>;
}

export default function ProjectLearning({ slug }: { slug: string }) {
  if (slug === 'multi-venue-order-book') return <MarketPipelineLearning />;
  if (slug === 'trading-infrastructure-optimizer') return <OptimizerLearning />;
  if (slug === 'rf-modulation-classifier') return <>
    <section className="study-section" id="story"><p className="font-note">The question</p><h2>How quickly can a signal become useful information?</h2><p>My interest in defense and trading technology led me here: the time between receiving a signal and acting on it can matter as much as the information itself. I wanted to explore one part of that chain—recognizing a radio signal’s modulation—and carry a machine-learning model into a measured C++ inference pipeline.</p><p>This project classifies recorded signals. It does not demonstrate a deployed defense system, a trading advantage, or an end-to-end radio link.</p></section>
    <section className="study-section"><h2>A little radio, before the code.</h2><div className="grid sm:grid-cols-2 gap-6"><div><h3 className="font-bold text-lg">RF is the medium.</h3><p>RF stands for radio frequency. Wireless systems use electromagnetic waves to carry information between transmitters and receivers. The receiver observes a mixture of the intended signal, noise, and effects of the channel.</p></div><div><h3 className="font-bold text-lg">Modulation is how we write on it.</h3><p>A transmitter varies a carrier’s amplitude, frequency, or phase to represent information. PSK uses phase; QAM combines amplitude and phase. Identifying the modulation helps a receiver decide how to interpret an unfamiliar signal.</p></div></div><p>More possible symbols can carry more bits in each transmission interval, but closely spaced symbols become harder to distinguish in noise. That tradeoff makes signal quality essential context for any accuracy claim.</p><a className="underline text-sm" href="https://pysdr.org/content/digital_modulation">Background reading: PySDR’s digital modulation guide</a></section>
    <section className="study-section"><h2>See what noise takes away.</h2><SignalLab /></section>
    <section className="study-section"><h2>From samples to a decision.</h2><div className="grid sm:grid-cols-3 gap-4">{[['Capture the shape', 'Raw in-phase (I) and quadrature (Q) samples retain the amplitude and phase structure of the signal.'], ['Learn the patterns', 'A 1D convolutional network learns features across the samples and predicts one of 24 modulation classes.'], ['Measure the runtime', 'Exporting to ONNX lets the C++ pipeline run the model, compare predictions, and profile inference latency.']].map(([title, text]) => <div className="lab" key={title}><h3 className="font-bold">{title}</h3><p className="text-sm">{text}</p></div>)}</div></section>
    <section className="study-section"><h2>What the measurements taught me.</h2><p>The existing benchmark reports about 92% accuracy above +10 dB SNR, but performance falls toward chance in heavy noise. An accuracy-versus-SNR curve is therefore more informative than a single overall score.</p><p>The C++ pipeline reports 775 μs mean inference latency and 1,000 matching predictions against PyTorch. Prediction parity checks the export path; it does not establish accuracy on unseen real-world radio captures.</p><p>The surprising systems result: adding a producer/consumer thread did not help. Model execution already consumed 99.7% of inference time, so synchronization cost more than the small amount of work it could hide. The next useful experiments belong inside the inference workload: quantization, batching, or a smaller model.</p></section>
  </>;
  if (slug === 'nba-betting-analytics') return <>
    <section className="study-section" id="story"><p className="font-note">The question</p><h2>A prediction is only half the bet.</h2><p>This project explores the full path from NBA game logs to player-stat predictions, probabilities, and expected value. The engineering challenge was connecting a data pipeline, prediction engine, API, and paper-trading workflow into one research platform.</p><p>The mathematical takeaway: predicting performance is not enough to beat the payout structure. Without reliable probability estimates and an evaluation against actual offered prices, an apparent edge is just an assumption.</p></section>
    <section className="study-section"><h2>From past games to a probability.</h2><details open><summary>A recent game counts more than an old one.</summary><p>A weighted average gives recent observations more influence. With exponential decay, the weight shrinks as a game gets older. Context adjustments for opponent, rest, and home/away try to account for differences that a simple average misses.</p><div className="formula">μ̂ = Σ(wᵢ × xᵢ) / Σwᵢ, with wᵢ = exp(−λ × ageᵢ)</div><p>Here xᵢ is a past stat, λ controls how quickly history fades, and μ̂ is the estimated mean. Faster decay adapts quickly but can overreact to a short streak.</p></details><details open><summary>An average is not a chance of winning.</summary><p>The model uses a normal-distribution approximation to translate an estimated mean and spread into a probability of exceeding a line L. Φ is the standard normal cumulative distribution function.</p><div className="formula">P(X &gt; L) ≈ 1 − Φ((L − μ̂) / σ̂)</div><p>That approximation is a modeling choice, not a law of basketball. Stats can be discrete or skewed, playing time changes, and injuries can shift the distribution. Integer lines also require accounting for ties or pushes under the relevant rules.</p></details><details open><summary>The payout sets the hurdle.</summary><p>At −110 odds, a $110 stake wins $100 in net profit. Expected net is 100p − 110(1 − p), so break-even is 110 / 210 ≈ 52.38%. A true 50% chance has negative expected value at that price.</p><div className="formula">EV = p × profit if won − (1 − p) × stake</div></details></section>
    <section className="study-section"><h2>Try the math yourself.</h2><OddsLab /></section>
    <section className="study-section"><h2>Why the edge is so fragile.</h2><div className="grid sm:grid-cols-2 gap-6"><div><h3 className="font-bold">The margin is already in the price.</h3><p>If both sides of a two-outcome market are −110, their implied probabilities total roughly 104.76%. That excess over 100% illustrates the bookmaker’s margin. Being right half the time is not enough.</p></div><div><h3 className="font-bold">Small errors can reverse the answer.</h3><p>At −110, assuming a 55% chance produces about +$5 expected net per $100. If the true chance is 51%, it becomes about −$2.64. A four-point estimation error changes the sign of the supposed edge.</p></div><div><h3 className="font-bold">Parlays multiply uncertainty.</h3><p>Five independent 50% picks all win only 3.125% of the time. Picks involving the same game can share causes—pace, minutes, or injuries—so multiplying individual probabilities may be wrong.</p></div><div><h3 className="font-bold">More games do not fix a biased model.</h3><p>Collecting more history helps research, but does not automatically correct a flawed distribution or missing context. A useful evaluation needs chronological holdouts, odds available at decision time, and calibration checks.</p></div></div></section>
    <section className="study-section lab"><p className="font-note">Evidence & limitations</p><h2>Built as a research tool. No profitability claim.</h2><p>I do not have a documented win rate, ROI, or completed backtest to report. The findings above are mathematical examples and modeling limitations, not measured betting returns. The paper-trading workflow provides infrastructure for evaluation; building it does not itself validate the model.</p><p>A next evaluation would freeze the model, log predictions against timestamped lines, and measure calibration and net returns on future games, including uncertainty. Until then, the work demonstrates software engineering and probabilistic reasoning—not a proven betting strategy.</p></section>
  </>;
  return null;
}
