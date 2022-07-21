import React from "react";
import '../Styling/ExpenseSum.css'

const ExpenseSum = (props) => {

  let sum = 0
  props.expenses.map((e) => (
    sum = sum + parseInt(e.amount)
  ));

  return (
    <div className="expense-sum">
      <h3 className="total">Total:</h3>
      <h3 className="sum">${sum}</h3>
    </div>
  );
}
export default ExpenseSum;
