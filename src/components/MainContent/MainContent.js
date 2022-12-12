import React from 'react';
import s from './MainContent.module.scss';
import budgetMainImg from '../../image/budget-family-img.svg';

function MainContent() {
    return (
        <section className={s.jointSeparate}>
            <h2 className={s.jointSeparate__title}><b>Калькулятор</b> <br/> смешанного долевого бюджета</h2>
            <img className={s.jointSeparate__mainImg} src={budgetMainImg}
                 alt="Калькулятор смешанного долевого бюджета иллюстрация"/>
            <p className={s.jointSeparate__textBlock}>Финансовый вопрос – важный аспект семейной жизни. Многие пары
                расстаются из-за разногласий в формировании
                бюджета, а ведь коммуналку проще платить вдвоем. Иначе, зачем оно всё?</p>
        </section>
    );
}

export default MainContent;
