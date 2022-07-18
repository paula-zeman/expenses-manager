import '../Styling/ExpenseItem.css'

const ExpenseItem = () => {

  const item = [
    {
    title: 'Toilet Paper',
    amount: '10',
    date: new Date('2020, 5, 12')
  },
  {
    title: 'Cat Food',
    amount: '120',
    date: new Date('2021, 4, 7')
  },
  {
    title: 'Car Wash',
    amount: '15',
    date: new Date('2021, 3, 9')
  }
]

  return (
    <div className="expense-item">
    {item.map((i) => (
      <div className="expense-item-component">{i.title}</div>
    )
    )}
    </div>
  )
}

export default ExpenseItem;
