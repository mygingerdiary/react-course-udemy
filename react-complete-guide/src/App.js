import React, { useState } from 'react';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28)
    },
    {
        id: "e2",
        title: 'Toilet paper',
        amount: 3.20,
        date: new Date(2020, 3, 12)
    },
    {
        id: "e3",
        title: 'Fruit',
        amount: 10.03,
        date: new Date(2021, 1, 3)
    },
    {
        id: "e4",
        title: 'Something',
        amount: 123.44,
        date: new Date(2021, 2, 28)
    }
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses]
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
