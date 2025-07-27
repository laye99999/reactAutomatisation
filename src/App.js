import { useState } from "react";
import Login from "./login";
import ItemManager from "./ItemManager";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin(username, password) {
    if (username === "admin" && password === "123456") {
      setIsLoggedIn(true);
    } else {
      alert("Identifiants incorrects");
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div style={{ padding: 20 }}>
          <div style={{ marginBottom: 20 }}>
            <button onClick={handleLogout}>Se déconnecter</button>
          </div>
          <ItemManager />
        </div>
      )}
    </div>
  );
}
