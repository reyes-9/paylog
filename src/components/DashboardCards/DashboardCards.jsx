const DashboardCards = () => {
  const peso = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  });
  const summary = {
    incomeTotal: 7651,
    expensesTotal: 5840,
    balance: 1811,
  };

  function formatPeso(value) {
    return peso.format(value).replace("PHP", "₱").replace(/\s/g, "");
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-900/60 backdrop-blur border border-gray-800 rounded-2xl p-6 shadow-lg">
        <p className="text-gray-400 text-sm">Income</p>
        <strong className="block mt-2 text-2xl font-semibold text-green-400">
          {formatPeso(summary.incomeTotal)}
        </strong>
      </div>

      <div className="bg-gray-900/60 backdrop-blur border border-gray-800 rounded-2xl p-6 shadow-lg">
        <p className="text-gray-400 text-sm">Expenses</p>
        <strong className="block mt-2 text-2xl font-semibold text-red-400">
          {formatPeso(summary.expensesTotal)}
        </strong>
      </div>

      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 shadow-xl">
        <p className="text-indigo-100 text-sm">Remaining Balance</p>
        <strong className="block mt-2 text-2xl font-bold text-white">
          {formatPeso(summary.balance)}
        </strong>
      </div>
    </section>
  );
};

export default DashboardCards;
