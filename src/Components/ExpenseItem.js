import '../Styling/ExpenseItem.css'

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear()
  return (
    <div className="expense-item">
      <h2>{props.title}</h2>
      <div>${props.amount}</div>
      <div>{month} {day}, {year}</div>
    </div>
  )
}

export default ExpenseItem;
