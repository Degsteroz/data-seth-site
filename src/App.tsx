import { Delivery } from './components/Delivery';
import { Logo } from './components/Logo';
import { Pilot } from './components/Pilot';
import { Pipeline } from './components/Pipeline';
import { ABOUT, DOMAINS, HERO_TAGS, MANIFEST, NAV, QUALITY, TARIFFS } from './data/content';

function SectionHead({ n, title, lead }: { n: string; title: string; lead?: string }) {
  return (
    <div className="head">
      <div className="stack" style={{ gap: 14 }}>
        <div className="label">{n}</div>
        <h2>{title}</h2>
      </div>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="in">
          <Logo />
          <nav className="nav">
            {NAV.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <a className="btn" href="#pilot">
            Запросить пилот
          </a>
        </div>
      </header>

      <section id="top">
        <div className="hero">
          <div className="stack">
            <div className="col stack">
              <div className="eyebrow">DATA SETH — ENTERPRISE DATA INFRASTRUCTURE & MCP</div>
              <h1>
                Поставка структурированных данных и дата-сетов для ИИ, аналитики и исследований
              </h1>
              <p>
                Проектируем и обслуживаем конвейеры сбора, очистки и верификации данных. Быстрая
                интеграция через MCP и подписку на готовые потоки с прозрачной моделью оплаты по
                объёму и качеству.
              </p>
              <div className="row">
                <a className="btn lg cyan" href="#pilot">
                  Запросить пилотный дата-сет
                </a>
                <a className="btn lg ghost" href="#pipeline">
                  Архитектура и интеграция
                </a>
              </div>
              <div className="tags">
                {HERO_TAGS.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <span>dataset.manifest.yaml</span>
              <span style={{ color: 'var(--ok)' }}>● validated</span>
            </div>
            <div className="card-body">
              {MANIFEST.map(([k, v], i) => (
                <div key={i}>
                  <span className="ln">{i + 1}</span>
                  <span className="k">{k}</span>
                  <span style={{ color: 'var(--text)' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <div className="stack" style={{ gap: 14, maxWidth: 720 }}>
            <div className="label">О КОМПАНИИ</div>
            <h2>Инженерный подход к сбору и подготовке данных</h2>
          </div>
          <div className="about">
            {ABOUT.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="pipeline">
        <div className="wrap">
          <SectionHead
            n="01 / ПАЙПЛАЙН"
            title="Как устроен поток данных в Data Seth"
            lead="Источники и сбор, обработка и нормализация, интеграция и доставка: Raw Data → SDP → ODS → DDS."
          />
          <Pipeline />
        </div>
      </section>

      <section id="quality">
        <div className="wrap">
          <SectionHead n="02 / КАЧЕСТВО" title="Многоуровневая верификация и SLA" />
          <div className="grid-1 cols-260">
            {QUALITY.map((q, i) => (
              <div className="cell" key={q.title}>
                <div className="label sm">{`0${i + 1}`}</div>
                <h3>{q.title}</h3>
                <p>{q.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery">
        <div className="wrap">
          <SectionHead
            n="03 / ДОСТАВКА"
            title="Данные приходят туда, где с ними работают"
            lead="Из слоя DDS данные передаются в AI-системы по протоколу MCP, выгружаются по API или поставляются готовыми дата-сетами по подписке."
          />
          <Delivery />
        </div>
      </section>

      <section id="domains">
        <div className="wrap">
          <div className="stack" style={{ gap: 14, maxWidth: 720 }}>
            <div className="label">04 / НАПРАВЛЕНИЯ</div>
            <h2>Сценарии применения</h2>
          </div>
          <div className="grid-1 cols-240">
            {DOMAINS.map((d) => (
              <div className="cell bg" key={d.tag}>
                <div className="mono cyan-t" style={{ fontSize: 12 }}>
                  {d.tag}
                </div>
                <h3>{d.title}</h3>
                <div className="dom-block">
                  <div className="label sm">ЗАДАЧА</div>
                  <p>{d.task}</p>
                </div>
                <div className="dom-block">
                  <div className="label sm">РЕШЕНИЕ</div>
                  <p>{d.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="wrap">
          <SectionHead
            n="05 / МОДЕЛЬ ТАРИФИКАЦИИ"
            title="Модель тарификации"
            lead="Стоимость формируется прозрачно и привязана к реальному потреблению и требованиям к качеству данных."
          />
          <div className="tariffs">
            {TARIFFS.map((t) => (
              <div className={`tariff${t.featured ? ' featured' : ''}`} key={t.name}>
                <div className="name">
                  <span>{t.name}</span>
                  {t.badge && <span className={t.featured ? 'pill' : 'amber-t'}>{t.badge}</span>}
                </div>
                {t.desc.map((d) => (
                  <p key={d}>{d}</p>
                ))}
                <div className="price">{t.price}</div>
                <a className={`btn lg${t.featured ? ' cyan' : ' ghost'}`} href="#pilot">
                  {t.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pilot />

      <footer>
        <div className="footer">
          <Logo small />
          <div className="links">
            <span>STATUS: OPERATIONAL</span>
            <span>DOCS</span>
            <span>SECURITY</span>
            <span>© 2026 DATA SETH</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
