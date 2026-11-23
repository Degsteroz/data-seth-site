import { useState, type FormEvent } from 'react';
import { CATEGORIES, PILOT_STEPS } from '../data/content';

export function Pilot() {
  const [done, setDone] = useState(false);

  // TODO: подключить отправку к CRM/endpoint
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <section id="pilot" className="pilot">
      <div className="in">
        <div className="stack" style={{ gap: 20 }}>
          <div className="label">06 / ЗАЯВКА</div>
          <h2>Подберём или соберём дата-сет под вашу задачу</h2>
          <p className="lead" style={{ maxWidth: 460 }}>
            Опишите, каких данных не хватает вашей команде, — мы оценим источники, сроки и
            подготовим пилотный образец.
          </p>
          <div className="stack" style={{ borderTop: '1px solid var(--line-2)', marginTop: 12 }}>
            {PILOT_STEPS.map((t, i) => (
              <div className="step" key={t}>
                <span>{`0${i + 1}`}</span>
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="form-box">
          {done ? (
            <div className="stack done">
              <div className="ok">● ЗАЯВКА ПРИНЯТА</div>
              <div className="msg">Инженер свяжется с вами в течение рабочего дня</div>
              <button onClick={() => setDone(false)}>← Новая заявка</button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <label className="field">
                <span>Рабочий email</span>
                <input type="email" name="email" required placeholder="name@company.com" />
              </label>
              <label className="field">
                <span>Компания</span>
                <input name="company" required />
              </label>
              <label className="field">
                <span>Категория задачи</span>
                <select name="category" required defaultValue="">
                  <option value="" disabled>
                    Выберите категорию
                  </option>
                  {CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <label className="field">
                <span>Описание необходимых данных, источников и желаемого формата выгрузки</span>
                <textarea name="details" rows={5} required />
              </label>
              <button type="submit" className="submit">
                Отправить запрос
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
