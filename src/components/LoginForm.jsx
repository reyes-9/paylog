import React, { useState } from "react";

export default function LoginForm({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Login failed");
      }

      const data = await res.json();
      setLoading(false);
      onLoginSuccess && onLoginSuccess(data); // callback to parent on success
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 320,
        margin: "auto",
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 4,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Login</h2>

      <label htmlFor="email" style={{ display: "block", marginBottom: 6 }}>
        Email
      </label>
      <input
        id="email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: 8,
          marginBottom: 12,
          borderRadius: 4,
          border: "1px solid #ccc",
          fontSize: 16,
        }}
      />

      <label htmlFor="password" style={{ display: "block", marginBottom: 6 }}>
        Password
      </label>
      <input
        id="password"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: 8,
          marginBottom: 12,
          borderRadius: 4,
          border: "1px solid #ccc",
          fontSize: 16,
        }}
      />

      {error && (
        <div
          style={{
            marginBottom: 12,
            color: "red",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          padding: 10,
          fontSize: 16,
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: 4,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
