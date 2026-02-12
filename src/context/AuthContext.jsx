import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const API = import.meta.env.VITE_API_URL;

  const checkAuth = async () => {
    try {
      const res = await fetch(`${API}/auth/check`, {
        credentials: "include",
      });

      const data = await res.json();

      if (data.userId) {
        setUser({ user_id: data.userId });
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("Auth check failed: ", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    const res = await fetch(`${API}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error("Login Failed");
    }

    await checkAuth();
  };

  const logout = async () => {
    await fetch(`${API}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    setUser(null);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
