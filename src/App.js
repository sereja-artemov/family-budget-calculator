import React, { useState } from 'react';
import JointSeparateBudget from './components/JointSeparateBudget/JointSeparateBudget';
import MainContent from './components/MainContent/MainContent';
import s from "./components/MainContent/MainContent.module.scss";

function App() {
  const [husbandIncome, setHusbandIncome] = useState(0);
  const [wifeIncome, setWifeIncome] = useState(0);

  return (
    <main className={s.mainContent}>
        <span className={s.gradientTop}></span>
      <div className={s.container}>
        <MainContent />
        <JointSeparateBudget
          wifeIncome={wifeIncome}
          setWifeIncome={setWifeIncome}
          husbandIncome={husbandIncome}
          setHusbandIncome={setHusbandIncome}
        />
      </div>
    </main>
  );
}

export default App;
