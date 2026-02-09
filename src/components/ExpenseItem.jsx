function ExpenseItem({ expense }) {
  return (
    <li className="expense-item">
      <span>{expense.description}</span>
      <span>${expense.amount.toFixed(2)}</span>
    </li>
  );
}

export default ExpenseItem;
