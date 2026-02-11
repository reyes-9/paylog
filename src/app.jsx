import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import Sidebar from "./components/Sidebar/Sidebar";
import ExpensesPage from "./pages/ExpensePage";
import DashboardPage from "./pages/DashboardPage";

// import "./styles.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth-check`, {
        credentials: "include",
      });
      const data = await res.json();

      if (data.userId) {
        setUser({ userId: data.userId });
      }
    } catch (err) {
      console.error("Auth check failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
      
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <LoginForm onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onLogout={handleLogout} />
      <div style={{ flex: 1 }}>
        <DashboardPage />
      </div>
    </div>
  );
}

export default App;

// import { useState } from "react";
// import LoginForm from "./components/LoginForm";
// import Sidebar from "./components/Sidebar/Sidebar";
// import ExpensesPage from "./pages/ExpensePage";
// import DashboardPage from "./pages/DashboardPage";

// // import "./styles.css";

// function App() {
//   const [user, setUser] = useState(null);

//   const handleLoginSuccess = (userData) => {
//     setUser(userData);
//   };

//   if (!user) {
//     return <LoginForm onLoginSuccess={handleLoginSuccess} />;
//   }

//   return (
//     <div style={{ display: "flex" }}>
//       <Sidebar />
//       <div style={{ flex: 1 }}>
//         <DashboardPage />
//       </div>
//     </div>
//   );
// }

// export default App;
