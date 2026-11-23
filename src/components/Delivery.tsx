import { useState } from 'react';
import { CHANNELS } from '../data/content';

export function Delivery() {
  const [i, setI] = useState(0);
  const chan = CHANNELS[i];
  return (
    <div className="delivery">
      <div className="box source">
        <div className="label sm">ИСТОЧНИК</div>
        <div className="big">DDS</div>
        <p>Версионированные витрины и готовые дата-сеты</p>
      </div>
      <div className="chans">
        {CHANNELS.map((c, n) => (
          <button key={c.code} className={`chan${n === i ? ' on' : ''}`} onClick={() => setI(n)}>
            <div className="t">
              <span>{c.code}</span>
              <span>{c.tag}</span>
            </div>
            <p>{c.desc}</p>
          </button>
        ))}
      </div>
      <div className="card box" style={{ background: 'var(--surface)' }}>
        <div className="card-head">
          <span>{chan.file}</span>
          <span>{chan.target}</span>
        </div>
        <div className="card-body">
          {chan.lines.map((l, n) => (
            <div key={n}>{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
