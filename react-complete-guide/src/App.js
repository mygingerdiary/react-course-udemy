import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
    const expenses = [
        {
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28)
        },
        {
            title: 'Toilet paper',
            amount: 3.20,
            date: new Date(2020, 3, 12)
        },
        {
            title: 'Fruit',
            amount: 10.03,
            date: new Date(2021, 1, 3)
        },
        {
            title: 'Something',
            amount: 123.44,
            date: new Date(2021, 2, 28)
        }
    ];

    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
