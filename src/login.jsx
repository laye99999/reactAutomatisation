import { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(username, password);
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: "auto", padding: 20 }}>
      <h2>Connexion</h2>
      <input
        type="text"
        name="username"
        placeholder="Nom utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        style={{ width: "100%", marginBottom: 10, padding: 8 }}
      />
      <input
        type="password"
        name="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        style={{ width: "100%", marginBottom: 10, padding: 8 }}
      />
      <button type="submit" style={{ width: "100%", padding: 10 }}>
        Se connecter
      </button>
    </form>
  );
}
