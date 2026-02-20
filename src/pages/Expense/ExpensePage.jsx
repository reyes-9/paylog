import { useState } from "react";
import { NavLink } from "react-router-dom";
import ExpenseForm from "../../components/ExpenseForm/ExpenseForm";
import ExpenseList from "../../components/ExpenseList";
import ExpenseTable from "../../components/ExpenseTable/ExpenseTable";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Layout from "../../layouts/Layout";

function ExpensesPage() {
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  // Fetch existing expenses on page load
  //   useEffect(() => {
  //     const fetchExpenses = async () => {
  //       try {
  //         const res = await fetch(`${import.meta.env.VITE_API_URL}/expenses`, {
  //           credentials: "include",
  //         });

  //         if (!res.ok) {
  //           throw new Error("Failed to fetch expenses");
  //         }

  //         const data = await res.json();
  //         setExpenses(data);
  //       } catch (err) {
  //         console.error("Error fetching expenses:", err);
  //         setError("Could not load expenses. Please try again later.");
  //       }
  //     };
  //     fetchExpenses();
  //   }, []);

  const addExpense = async (expenseData) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/expenses/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(expenseData),
      });

      if (!res.ok) {
        throw new Error("Failed to save expense");
      }

      const data = await res.json();
      setExpenses((prev) => [...prev, data]);
    } catch (err) {
      console.error("Error saving expense:", err);
      setError("Could not save expense. Please try again.");
    }
  };

  return (
    <Layout>
      <div className="flex justify-between items-center">
        <p className="text-xl font-smibold text-center text-gray-100">
          Expenses
        </p>
        <Breadcrumbs />
      </div>

      <div className="min-h-screen text-gray-100 mt-16">
        <main className="mx-auto space-y-10">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-5">
              Expense Table
            </p>
          </div>
          {/* Table */}
          <NavLink
            to="/expenses/add"
            className="bg-emerald-400 hover:bg-emerald-500 text-emerald-950 px-3 py-2 rounded text-sm mb-0"
          >
            Add Expense
          </NavLink>
          <ExpenseTable />
        </main>
      </div>
    </Layout>
  );
}

export default ExpensesPage;
