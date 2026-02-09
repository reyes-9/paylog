import { useState } from "react";
import LoginForm from "./components/LoginForm";
import ExpensesPage from "./pages/ExpensePage";
import "./styles.css";

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  if (!user) {
    return <LoginForm onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpensesPage /> {/* All expense logic lives here */}
    </div>
  );
}

export default App;
