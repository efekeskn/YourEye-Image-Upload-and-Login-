import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "efe" && password === "1234" && name && surname) {
      onLogin({ username, name, surname });
      navigate("/home"); 
    } else {
      setError("Bilgiler doğru değil veya eksik.");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Giriş Yap</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Ad"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Soyad"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
        <button type="submit">Giriş</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
