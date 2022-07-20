import '../Styling/ExpenseItem.css'

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear()
  return (
    <div className="expense-item">
      <div className="item-left">
        <h2>{props.title}</h2>
        <div className="item-date">{month} {day}, {year}</div>
      </div>
      <div className="item-right">
        <h3>${props.amount}</h3>
      </div>
    </div>
  )
}

export default ExpenseItem;
