

const DashboardCards = () => {
  const summary = {
    incomeTotal: 7651,
    expensesTotal: 5840,
    balance: 1811,
  };

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
  const peso = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  });

  function formatPeso(value) {
    return peso.format(value).replace("PHP", "₱").replace(/\s/g, "");
  }

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 p-6">
      <main className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Paylog Dashboard
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Income & Expense Overview
          </h1>
        </header>

        {/* Summary Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-gray-900/60 backdrop-blur border border-gray-800 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-400 text-sm">Income Total</p>
            <strong className="block mt-2 text-2xl font-semibold text-green-400">
              {formatPeso(summary.incomeTotal)}
            </strong>
          </article>

          <article className="bg-gray-900/60 backdrop-blur border border-gray-800 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-400 text-sm">Expenses Total</p>
            <strong className="block mt-2 text-2xl font-semibold text-red-400">
              {formatPeso(summary.expensesTotal)}
            </strong>
          </article>

          <article className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 shadow-xl">
            <p className="text-indigo-100 text-sm">Balance</p>
            <strong className="block mt-2 text-2xl font-bold text-white">
              {formatPeso(summary.balance)}
            </strong>
          </article>
        </section>

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
                <td className="px-4 py-3">{formatPeso(summary.incomeTotal)}</td>
                <td className="px-4 py-3">
                  {formatPeso(summary.expensesTotal)}
                </td>
                <td className="px-4 py-3">{formatPeso(summary.balance)}</td>
                <td className="px-4 py-3">{formatPeso(summary.balance)}</td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3">{formatPeso(summary.incomeTotal)}</td>
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
  );
};

export default DashboardCards;
