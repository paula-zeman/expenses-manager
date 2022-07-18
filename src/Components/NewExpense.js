import '../Styling/NewExpense.css'

const NewExpense =  () => {

return (
  <div>
  <form className="new-expense">
    <div className="new-expense-one">
      <div><label>What have you bought?</label></div>
      <div><input type="text" /></div>
      <div><label>How much was it?</label></div>
      <div><input type="text" /></div>
    </div>
    <div className="new-expense-two">
      <div><label>When have you bought it?</label></div>
      <div><input type="date" /></div>
    </div>
  </form>
  </div>
)
}

export default NewExpense;
