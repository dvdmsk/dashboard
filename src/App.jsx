import { Route, Routes } from "react-router-dom";
import "./App.css";
import Overview from "./pages/Overview";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Layout from "./componets/Layout";
import { useEffect, useState } from "react";

function App() {
  const [isDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Overview />} />
        <Route path="overview" element={<Overview />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;
