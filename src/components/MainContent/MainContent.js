import React from 'react';
import s from './MainContent.module.scss';
import budgetMainImg from '../../image/budget-family-img.svg';

function MainContent() {
  return (
      <section className={s.jointSeparate}>
        <h2 className={s.jointSeparate__title}>
          <b>Калькулятор</b>
          {' '}
          <br />
          {' '}
          семейного долевого бюджета
        </h2>
        <img
            className={s.jointSeparate__mainImg}
            src={budgetMainImg}
            alt="Калькулятор смешанного долевого бюджета иллюстрация"
        />
        <div className={s.contentWrapper}>
          <div className={s.textBlock}>
            <p className={s.textBlock__paragraph}>
              Финансовый вопрос – важный аспект семейной жизни. Многие пары расстаются из-за разногласий в формировании бюджета, а ведь коммуналку проще платить вдвоем. Иначе, зачем оно всё?
            </p>
          </div>
          <div className={s.textBlock}>
            <h2 className={s.textBlock__title}>Суть</h2>
            <p className={s.textBlock__paragraph}>
              Муж, и жена откладывают деньги для себя любимого, но при этом пополняют и общий конверт, в который перечисляют деньги для оплаты аренды, коммуналки, ремонта и прочих значимых расходов.
            </p>
          </div>
          <div className={s.textBlock}>
            <div className={s.textBlock__note}>
              <h3>Пример</h3>
              <p className={s.textBlock__paragraph}>
                С понедельника по пятницу муж ездит в офис пить воду из кулера и получает за это 60 000 рублей в месяц, а жена пашет как лошадь за 30 000 рублей. Каждый из супругов ежемесячно перечисляет в конверт по 25% от зарплаты. Женушка – 7 500 тыщ., муженек – 15 000 тыщ. Итого в конверте оказалось – 22 500 рублей. Эти деньги расходуются на аренду, покупку продуктов и одежду для ребенка.
              </p>
            </div>
          </div>
          <section className={s.advantages}>
            <h2 className={s.textBlock__title}>Плюсы и минусы смешанного бюджета</h2>
            <div className={s.textBlock}>
              <div className={s.textBlock__paragraph}>
                <h2 className={s.textBlock__subtitle}>Плюсы</h2>
                <ul className={s.advantages__list}>
                  <li>✔  Супруги имеют в распоряжении личные деньги.</li>
                  <li>✔  Супруги вносят равноценный вклад в семейную жизнь.</li>
                  <li>✔  Благоприятный климат в семье, отсутствуют взаимные упреки и недосказанность.</li>
                </ul>
              </div>
              <div className={s.textBlock__paragraph}>
                <h2 className={s.textBlock__subtitle}>Минусы</h2>
                <ul className={s.advantages__list}>
                  <li>✔  Явных недостатков не обнаружено.</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
  );
}

export default MainContent;
