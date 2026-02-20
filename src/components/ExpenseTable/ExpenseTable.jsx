import { formatPeso } from "../../utils/currency";

const categories = [
  {
    category: "Grocery",
    planned: 3000,
    actual: 1935,
    total: 1065,
    balance: 0,
    incomeSource: "Paycheck",
    income: 7651,
  },
  {
    category: "Everyday",
    planned: 1500,
    actual: 1147,
    total: 353,
    balance: 886,
  },
  {
    category: "Personal",
    planned: 2151,
    actual: 1758,
    total: 393,
    balance: 926,
  },
  {
    category: "Savings",
    planned: 1000,
    actual: 1000,
    total: 0,
    balance: 0,
  },
];
const summary = {
  incomeTotal: 7651,
  expensesTotal: 5840,
  balance: 1811,
};

const ExpenseTable = () => {
  return (
    <div>
      {" "}
      <section className="overflow-x-auto bg-gray-900/60 border border-gray-800 rounded-2xl shadow-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-800 text-gray-400 uppercase tracking-wider text-xs">
            <tr>
              <th className="px-4 py-3">Expenses</th>
              <th className="px-4 py-3">Planned</th>
              <th className="px-4 py-3">Actual</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Balance</th>
              <th className="px-4 py-3">Total</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800">
            {/* Category Rows */}
            {categories.map((item) => (
              <tr
                key={item.category}
                className="hover:bg-gray-800/50 transition-colors"
              >
                <td className="px-4 py-3">{item.category}</td>
                <td className="px-4 py-3">{formatPeso(item.planned)}</td>
                <td className="px-4 py-3">{formatPeso(item.actual)}</td>
                <td className="px-4 py-3">{formatPeso(item.total)}</td>
                <td className="px-4 py-3">{formatPeso(item.balance)}</td>
                <td className="px-4 py-3">
                  {item.income ? formatPeso(item.income) : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ExpenseTable;
