import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/LoginForm/LoginForm";
import ProtectedLayout from "../layouts/ProtectedLayout";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import ExpensesPage from "../pages/Expense/ExpensePage";
import AddExpensePage from "../pages/Expense/Add";


export default function AppRoutes() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedLayout>
            <DashboardPage />
          </ProtectedLayout>
        }
      />

      <Route
        path="/expenses"
        element={
          <ProtectedLayout>
            <ExpensesPage />
          </ProtectedLayout>
        }
      />

      <Route
        path="/expenses/add"
        element={
          <ProtectedLayout>
            <AddExpensePage />
          </ProtectedLayout>
        }
      />

      <Route
        path="/"
        element={<Navigate to={user ? "/dashboard" : "/login"} />}
      />
    </Routes>
  );
}
