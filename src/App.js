import ExpenseItem from "./Components/ExpenseItem";
import './App.css';
import NewExpense from "./Components/NewExpense";

function App() {
  return (
  <div className="app-container">
    <div className="new-expense-container">
      <NewExpense />
    </div>
    <ExpenseItem />
  </div>
  );
}

export default App;
