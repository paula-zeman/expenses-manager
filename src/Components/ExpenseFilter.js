import React from "react";

const ExpenseFilter = (props) => {

  const selectedYear = (event) => {
    props.filterYear(event.target.value)
  }

  return (
    <div className="filter">
      <select onChange={selectedYear}>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;
