import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import ExpenseTable from "../components/ExpenseTable/ExpenseTable";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Layout from "../layouts/Layout";

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
      <div className="min-h-screen text-gray-100 p-6">
        <div className="flex justify-between items-center px-5">
          {/* <WelcomeCard name={fullName} /> */}
          <h1>test</h1>
          <Breadcrumbs />
        </div>
        <ExpenseTable />
        {error && <p className="error">{error}</p>}
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseList expenses={expenses} />
      </div>
    </Layout>
  );
}

export default ExpensesPage;
