import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/Sidebar/Sidebar";


export default function ProtectedLayout({ children }) {
  const { user, logout } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onLogout={logout} />
      <div className="p-3" style={{ flex: 1 }}>
        {children}
      </div>
    </div>
  );
}
