'use client';

import { useState } from 'react';

const venues = [
  { name: 'Binance', quote: 'USDT', bid: 100000, ask: 100001 },
  { name: 'Coinbase', quote: 'USD', bid: 99950, ask: 99952 },
  { name: 'Kraken', quote: 'USD', bid: 99970, ask: 99973 },
];

const stages = [
  ['Exchange feeds', 'WebSocket snapshots and updates'],
  ['Async adapters', 'Normalize symbols, prices, and timestamps'],
  ['Redpanda', 'Buffer keyed events by venue and market'],
  ['Analytics worker', 'Rebuild books and close one-second windows'],
  ['ClickHouse + API', 'Query history and stream new windows'],
];

export function MarketPipelineLearning() {
  const [venueIndex, setVenueIndex] = useState(0);
  const [bidSize, setBidSize] = useState(8);
  const [askSize, setAskSize] = useState(5);
  const venue = venues[venueIndex];
  const imbalance = (bidSize - askSize) / (bidSize + askSize);

  return <>
    <section className="study-section" id="story">
      <p className="font-note">The problem</p>
      <h2>One market, three different feeds.</h2>
      <p>Each exchange sends order-book data in its own format. The pipeline reads those updates concurrently, rebuilds a separate book for each venue and market, and publishes a common event format for analytics.</p>
      <p>Binance BTC-USDT stays separate from Coinbase and Kraken BTC-USD. A shared base asset does not make the quote currencies interchangeable.</p>
    </section>

    <section className="study-section">
      <h2>Follow an update through the system.</h2>
      <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {stages.map(([title, detail], index) => <li key={title} className="lab relative">
          <span className="font-mono text-sm" style={{ color: 'var(--green)' }}>{String(index + 1).padStart(2, '0')}</span>
          <h3 className="font-bold mt-3">{title}</h3>
          <p className="text-sm">{detail}</p>
          {index < stages.length - 1 && <span aria-hidden="true" className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10" style={{ color: 'var(--green)' }}>→</span>}
        </li>)}
      </ol>
      <p>Snapshots establish the starting book. Later updates change individual price levels; a detected sequence gap means that book must be rebuilt from a fresh snapshot.</p>
    </section>

    <section className="study-section">
      <h2>What does order-book imbalance measure?</h2>
      <div className="lab">
        <p>Choose a venue and change the displayed bid and ask sizes. This small example shows how the top-of-book balance changes; the project computes the metric across the top ten levels.</p>
        <div className="flex flex-wrap gap-2 mt-5" role="group" aria-label="Choose an example venue">
          {venues.map((item, index) => <button key={item.name} type="button" onClick={() => setVenueIndex(index)} aria-pressed={venueIndex === index} className={`pill-link ${venueIndex === index ? 'primary' : ''}`}>{item.name}</button>)}
        </div>
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <div>
            <label htmlFor="bid-size">Bid size: {bidSize} BTC</label>
            <input id="bid-size" type="range" min="1" max="20" value={bidSize} onChange={event => setBidSize(Number(event.target.value))} />
            <div className="h-4 rounded-full overflow-hidden mt-2" style={{ background: 'var(--line)' }}><div className="h-full" style={{ width: `${bidSize * 5}%`, background: 'var(--green)' }} /></div>
            <p className="text-sm">Best bid: {venue.bid.toLocaleString()} {venue.quote}</p>
          </div>
          <div>
            <label htmlFor="ask-size">Ask size: {askSize} BTC</label>
            <input id="ask-size" type="range" min="1" max="20" value={askSize} onChange={event => setAskSize(Number(event.target.value))} />
            <div className="h-4 rounded-full overflow-hidden mt-2" style={{ background: 'var(--line)' }}><div className="h-full opacity-65" style={{ width: `${askSize * 5}%`, background: 'var(--green)' }} /></div>
            <p className="text-sm">Best ask: {venue.ask.toLocaleString()} {venue.quote}</p>
          </div>
        </div>
        <div className="mt-7" aria-live="polite">
          <div className="lab-output">{imbalance >= 0 ? '+' : ''}{imbalance.toFixed(2)}</div>
          <p className="!mt-0">Illustrative book imbalance</p>
        </div>
        <div className="formula">(bid size − ask size) / (bid size + ask size)</div>
        <p className="text-sm">The prices and sizes here are synthetic. This control is an explanation of the metric, not a live feed or a trading signal.</p>
      </div>
    </section>

    <section className="study-section">
      <h2>What the current build covers.</h2>
      <p>The repository includes exchange adapters, Redpanda publication, book reconstruction, one-second analytics, ClickHouse storage, a WebSocket API, and replay fixtures. The local tests check normalization, sequence gaps, and the distinction between trade VWAP and resting book size.</p>
      <p>Kraken checksum validation is not implemented yet, and live trade VWAP currently uses only Binance trades. The repository does not report a measured end-to-end throughput or a zero-loss guarantee.</p>
    </section>
  </>;
}

const scenarios = [
  { name: 'Burst traffic', watch: 'Queue depth, p99 order latency, throughput', action: 'Compare bounded batching and polling changes; revert if p99 or correctness worsens.' },
  { name: 'Slow consumer', watch: 'Subscriber lag, dropped updates, recovery time', action: 'Test backpressure and resynchronization; reject changes that lose book consistency.' },
  { name: 'Cross-zone placement', watch: 'Network latency, failover time, infrastructure cost', action: 'Compare same-zone and cross-zone placements against a measured baseline.' },
];

export function OptimizerLearning() {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const scenario = scenarios[scenarioIndex];
  return <>
    <section className="study-section" id="story">
      <p className="font-note">The question</p>
      <h2>Can infrastructure tune itself without losing correctness?</h2>
      <p>The project starts with a simplified exchange: trading clients send orders through a gateway to a matching engine, which produces market data and execution reports. Instrumentation will show where time is spent before any optimizer changes the configuration.</p>
      <p>This is an in-progress system design. The architecture and experiments below are planned work, not completed benchmark results.</p>
    </section>
    <section className="study-section">
      <h2>Planned order path and control loop.</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[['Trading client', 'Generates orders'], ['Order gateway', 'Validates and routes'], ['Matching engine', 'Executes against a book'], ['Market data', 'Publishes book and trades']].map(([title, detail], index) =>
          <div key={title} className="lab relative"><span className="font-mono text-sm" style={{ color: 'var(--green)' }}>{String(index + 1).padStart(2, '0')}</span><h3 className="font-bold mt-3">{title}</h3><p className="text-sm">{detail}</p>{index < 3 && <span aria-hidden="true" className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10" style={{ color: 'var(--green)' }}>→</span>}</div>
        )}
      </div>
      <div className="formula mt-4">Observe latency and failures → propose a bounded change → run an experiment → keep or roll back</div>
      <p>The first milestone is a working order path and baseline telemetry. The optimizer comes after there are measurements to compare.</p>
    </section>
    <section className="study-section">
      <h2>How would an experiment be judged?</h2>
      <div className="lab">
        <p>Choose a planned stress scenario to see the signals the control loop would inspect. These are experiment designs, not results.</p>
        <div className="flex flex-wrap gap-2 mt-5" role="group" aria-label="Choose a planned stress scenario">
          {scenarios.map((item, index) => <button key={item.name} type="button" onClick={() => setScenarioIndex(index)} aria-pressed={scenarioIndex === index} className={`pill-link ${scenarioIndex === index ? 'primary' : ''}`}>{item.name}</button>)}
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mt-6" aria-live="polite">
          <div className="formula"><strong>Measure</strong><br />{scenario.watch}</div>
          <div className="formula"><strong>Decision rule</strong><br />{scenario.action}</div>
        </div>
      </div>
    </section>
  </>;
}
