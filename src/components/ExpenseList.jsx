import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  return (
    <ul className="expense-list">
      {expenses.map((exp, index) => (
        <ExpenseItem key={index} expense={exp} />
      ))}
    </ul>
  );
}

export default ExpenseList;
