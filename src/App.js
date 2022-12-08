import JointSeparateBudget from './components/JointSeparateBudget/JointSeparateBudget';
import {useState} from "react";

function App() {
    const [husbandIncome, setHusbandIncome] = useState(0);
    const [wifeIncome, setWifeIncome] = useState(0);

  return (
      <JointSeparateBudget wifeIncome={wifeIncome} setWifeIncome={setWifeIncome} husbandIncome={husbandIncome} setHusbandIncome={setHusbandIncome} />
  );
}

export default App;
