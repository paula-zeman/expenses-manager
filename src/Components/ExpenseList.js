import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import React, {useState} from 'react';



const ExpenseList = (props) => {

  const [filteredYear, setFilteredYear] = useState('2022');

  const addFilterHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenseList = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


return (
  <div>
    <div>
      <ExpenseFilter filterYear={addFilterHandler}/>
    </div>
  {filteredExpenseList.length === 0 ? (
    <p>No expenses for {filteredYear.toString()}</p>
    ) : (
  filteredExpenseList.map((expense) => (
    <ExpenseItem
    key={expense.id}
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
    />
  ))
  )}

  </div>
)
}

export default ExpenseList;
