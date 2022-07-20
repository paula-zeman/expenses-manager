import React, { useState } from 'react';
import ExpenseList from './ExpenseList';
import NewExpense from './NewExpense';
import '../Styling/Container.css'

const Container = () => {

  const expensesContainer = [];

  const [expenses, setExpense] = useState(expensesContainer);

  const addExpenseHandler = (formEntry) => {
    setExpense(prevExpenses => {
      return [formEntry, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler}/>
      <ExpenseList expenses={expenses}/>
    </div>
  )
}

export default Container;
