import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";
import DashboardPage from "../pages/DashboardPage";
import ExpensesPage from "../pages/ExpensePage";
import ProtectedLayout from "../layouts/ProtectedLayout";

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
        path="/"
        element={<Navigate to={user ? "/dashboard" : "/login"} />}
      />
    </Routes>
  );
}
