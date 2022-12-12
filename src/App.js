import JointSeparateBudget from './components/JointSeparateBudget/JointSeparateBudget';
import {useState} from "react";
import MainContent from "./components/MainContent/MainContent";

function App() {
    const [husbandIncome, setHusbandIncome] = useState(0);
    const [wifeIncome, setWifeIncome] = useState(0);

    return (
        <main>
            <div className="container">


            <MainContent />
            <JointSeparateBudget wifeIncome={wifeIncome} setWifeIncome={setWifeIncome} husbandIncome={husbandIncome}
                                 setHusbandIncome={setHusbandIncome}/>
            </div>
        </main>
    );
}

export default App;
