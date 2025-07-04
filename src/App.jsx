import { Route, Routes } from "react-router-dom";
import "./App.css";
import Overview from "./pages/Overview";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Layout from "./componets/Layout";

function App() {
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
