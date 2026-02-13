import DashboardCards from "../components/DashboardCards/DashboardCards";
import WelcomeCard from "../components/WelcomeCard/WelcomeCard";
import { useState, useEffect } from "react";
import { formatPeso } from "../utils/currency";
import { api } from "../utils/api";

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

function DashboardPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getDashboardData = async () => {
      try {
        const response = await api.get("/dashboard/get-data");
        setData(response);
      } catch (err) {
        console.error(err);
        console.error("Dashboard load failed:", err.message);
      }
    };

    getDashboardData();
  }, []); // run once on mount

  const user = data?.userData?.[0];

  const fullName = user
    ? [user.first_name, user.last_name].filter(Boolean).join(" ") || undefined
    : undefined;

  return (
    <div>
      <WelcomeCard name={fullName} />

      <div className="min-h-screen text-gray-100 p-6">
        <main className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <header className="space-y-2">
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Paylog Dashboard
            </p>
          </header>
          <DashboardCards />
          {/* Table */}
          <section className="overflow-x-auto bg-gray-900/60 border border-gray-800 rounded-2xl shadow-lg">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-800 text-gray-400 uppercase tracking-wider text-xs">
                <tr>
                  <th className="px-4 py-3">Expenses</th>
                  <th className="px-4 py-3">Planned</th>
                  <th className="px-4 py-3">Actual</th>
                  <th className="px-4 py-3">Total</th>
                  <th className="px-4 py-3">Balance</th>
                  <th className="px-4 py-3">Income</th>
                  <th className="px-4 py-3">Total</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-800">
                {/* Summary Row */}
                <tr className="bg-gray-800/70 font-semibold">
                  <td className="px-4 py-3">Summary</td>
                  <td className="px-4 py-3">
                    {formatPeso(summary.incomeTotal)}
                  </td>
                  <td className="px-4 py-3">
                    {formatPeso(summary.expensesTotal)}
                  </td>
                  <td className="px-4 py-3">{formatPeso(summary.balance)}</td>
                  <td className="px-4 py-3">{formatPeso(summary.balance)}</td>
                  <td className="px-4 py-3"></td>
                  <td className="px-4 py-3">
                    {formatPeso(summary.incomeTotal)}
                  </td>
                </tr>

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
                    <td className="px-4 py-3">{item.incomeSource ?? ""}</td>
                    <td className="px-4 py-3">
                      {item.income ? formatPeso(item.income) : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;
