import { useEffect, useState } from 'react';
import { STAGES } from '../data/content';

export function Pipeline() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  // автопрокрутка до первого клика
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((s) => (s + 1) % STAGES.length), 3500);
    return () => clearInterval(t);
  }, [paused]);

  const cur = STAGES[i];
  return (
    <>
      <div className="stages">
        {STAGES.map((s, n) => (
          <button
            key={s.code}
            className={`stage${n === i ? ' on' : ''}`}
            onClick={() => {
              setPaused(true);
              setI(n);
            }}
          >
            <div className="top">
              <span>{`0${n + 1}`}</span>
              <span>{n < STAGES.length - 1 ? '→' : '■'}</span>
            </div>
            <div className="code">{s.code}</div>
            <div className="name">{s.name}</div>
          </button>
        ))}
      </div>
      <div className="grid-1 cols-260">
        <div className="cell">
          <div className="cap">ЭТАП</div>
          <h3>{cur.title}</h3>
          <p>{cur.desc}</p>
        </div>
        <div className="cell">
          <div className="cap">ОПЕРАЦИИ</div>
          {cur.ops.map((o) => (
            <div className="op" key={o}>
              <b>→</b>
              <span>{o}</span>
            </div>
          ))}
        </div>
        <div className="cell" style={{ gap: 16 }}>
          <div className="cap">НА ВЫХОДЕ</div>
          <div className="out">{cur.out}</div>
          <div className="cap">КОНТРОЛЬ</div>
          <div className="out amber-t">{cur.check}</div>
        </div>
      </div>
    </>
  );
}
