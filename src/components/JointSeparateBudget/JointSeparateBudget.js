import React, {useEffect, useState} from 'react';
import s from './JointSeparateBudget.module.scss';

const JointSeparateBudget = ({husbandIncome, setHusbandIncome, wifeIncome, setWifeIncome}) => {

    const [totalAmount, setTotalAmount] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [percentageHusband, setPercentageHusband] = useState(0);
    const [percentageWife, setPercentageWife] = useState(0);
    const [amountHusband, setAmountHusband] = useState(0);
    const [amountWife, setAmountWife] = useState(0);

    console.log(typeof percentageHusband)

    function handleHusbandIncome(event) {
        setHusbandIncome(event.target.value);
        setLocalStorageIncome('husbandIncome', event);
    }
    function handleWifeIncome(event) {
        setWifeIncome(event.target.value);
        setLocalStorageIncome('wifeIncome', event);
    }

    function setLocalStorageIncome(storageName, event) {
        if (event.target.value !== '') {
            localStorage.setItem(storageName, JSON.stringify(event.target.value));
        }
    }
    //Общий доход
    function calculateTotalIncome() {
        setTotalIncome(Number(husbandIncome) + Number(wifeIncome));
    }
    //Вычисление доли от общего дохода в процентах
    function calculateMembersPercentage(memberIncome) {
        const result = memberIncome / totalIncome * 100;
        return result.toFixed(1);
    }
    //Вычисление доли от общего дохода в процентах
    function calculateMemberAmount(memberPercentage) {
        const result = totalAmount * (memberPercentage / 100);
        return Math.round(result);
    }

    useEffect(() => {
        if (localStorage.husbandIncome) {
            setHusbandIncome(JSON.parse(localStorage.husbandIncome));
        }
        if (localStorage.wifeIncome) {
            setWifeIncome(JSON.parse(localStorage.wifeIncome));
        }
    }, []);

    useEffect(() => {
        calculateTotalIncome();
        setPercentageHusband(Number(calculateMembersPercentage(husbandIncome)));
        setPercentageWife(Number(calculateMembersPercentage(wifeIncome)));
    }, [husbandIncome, wifeIncome, totalIncome]);

    useEffect(() => {
        setAmountHusband(calculateMemberAmount(percentageHusband));
        setAmountWife(calculateMemberAmount(percentageWife));
    }, [totalAmount, percentageHusband, percentageWife]);

    return (
        <section className={s.jsBudget}>
            <form action="POST">
                <fieldset>
                    <label>
                        Введите доход мужа
                        <input type="number" onChange={handleHusbandIncome} value={husbandIncome} />
                    </label>
                    <label>
                        Введите доход жены
                        <input type="number" onChange={handleWifeIncome} value={wifeIncome} />
                    </label>
                </fieldset>
                <label>
                    Сумма расходов
                    <input type="number" onChange={(event) => setTotalAmount(event.target.value)} value={totalAmount} />
                </label>
                <p>Сумма доходов: {totalIncome}</p>
                <p>Муж зарабатывает {!isNaN(percentageHusband) ? percentageHusband : 0}% от общего дохода</p>
                <p>Жена зарабатывает {!isNaN(percentageWife) ? percentageWife : 0}% от общего дохода</p>
                <p>Муж платит: {!isNaN(amountHusband) ? amountHusband : 0}</p>
                <p>Жена платит: {!isNaN(amountWife) ? amountWife : 0}</p>
            </form>
        </section>
    );
};

export default JointSeparateBudget;
