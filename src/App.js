import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route
        path="/"
        element={<Login onLogin={setUser} />}
      />
      <Route
        path="/home"
        element={user ? <Home user={user} /> : <Navigate to="/" />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
