import DashboardCards from "../components/SummaryCards/SummaryCards";
import WelcomeCard from "../components/WelcomeCard/WelcomeCard";
import ExpenseTable from "../components/ExpenseTable/ExpenseTable";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Layout from "../layouts/Layout";
import { useState, useEffect } from "react";
import { api } from "../utils/api";

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
    <Layout>
      <div className="flex justify-between items-center">
        <p className="text-xl font-smibold text-center text-gray-100">
          Dashboard
        </p>
        <Breadcrumbs />
      </div>

      {/* <WelcomeCard name={fullName} /> */}

      <div className="min-h-screen text-gray-100 mt-16">
        <main className=" mx-auto space-y-10">
          {/* Header */}
          <header className="space-y-2">
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Summary
            </p>
          </header>
          <DashboardCards />

          <div className="my-10">
            <p className="text-sm uppercase tracking-widest text-gray-400">
              Expense Table
            </p>
          </div>
          {/* Table */}
          <ExpenseTable />
        </main>
      </div>
    </Layout>
  );
}

export default DashboardPage;
