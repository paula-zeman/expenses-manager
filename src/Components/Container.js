import React, { useState } from 'react';
import ExpenseList from './ExpenseList';
import NewExpense from './NewExpense';
import '../Styling/Container.css'
import ExpenseSum from './ExpenseSum';

const Container = () => {

  const expensesContainer = [];

  const [expenses, setExpense] = useState(expensesContainer);

  const addExpenseHandler = (formEntry) => {
    setExpense(prevExpenses => {
      return [formEntry, ...prevExpenses]
    });
  }


  return (
    <div className="container">
      <div className='container-top'>
        <div className="container-list">
          <NewExpense addExpense={addExpenseHandler}/>
        </div>
        <div className="expense-sum">
          <ExpenseSum expenses={expenses}/>
        </div>
      </div>
      <div className="expense-list">
          <ExpenseList expenses={expenses}
          />
      </div>
    </div>
  )
}

export default Container;
