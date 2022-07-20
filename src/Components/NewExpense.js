import '../Styling/NewExpense.css'
import React, { useState } from 'react';

const NewExpense =  (props) => {
  const [enteredTitle, setTitle] = useState('');
  const [enteredAmount, setAmount] = useState('');
  const [enteredDate, setDate] = useState('');


  const titleHandler = (event) => {
    setTitle(event.target.value)
  };

  const amountHandler = (event) => {
    setAmount(event.target.value)
  };

  const dateHandler = (event) => {
    setDate(event.target.value)
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseObject = {
      id: Math.random().toString(),
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.addExpense(expenseObject)
    setTitle('');
    setAmount('');
    setDate('');
  }



return (
  <div>
  <form className="new-expense" onSubmit={submitHandler}>
    <div className="new-expense-one">
      <div><label>Title</label></div>
      <div className="new-input"><input type="text" value={enteredTitle} onChange={titleHandler}/></div>
      <div><label>Amount</label></div>
      <div className="new-input"><input type="text" value={enteredAmount} onChange={amountHandler}/></div>
    </div>
    <div className="new-expense-two">
      <div><label>Date</label></div>
      <div className="new-input"><input type="date" min="2019-01-01" max="2023-07-14" value={enteredDate} onChange={dateHandler}/></div>
      <br />
      <div><button type="submit">Save</button></div>
    </div>
  </form>
  </div>
)
}

export default NewExpense;
