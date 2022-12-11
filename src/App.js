import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScopeOfWork from "./page/ScopeOfWork";
import ProjectStatUs from "./page/ProjectStatUs";
import RajGroupOffices from "./page/RajGroupOffices";
const Login = React.lazy(() => import("./page/Login"));
const Saidbar = React.lazy(() => import("./page/Saidbar"));
const AddClient = React.lazy(() => import("./page/AddClient"));
function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<h1>Login</h1>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/Dashboard"
            element={<Saidbar page={<h3 className="pt-4">Dashboard</h3>} />}
          />
          <Route path="/clients" element={<Saidbar page={<AddClient />} />} />
          <Route
            path="/Scope-of-Work"
            element={<Saidbar page={<ScopeOfWork />} />}
          />
          <Route
            path="/Project-StatUs"
            element={<Saidbar page={<ProjectStatUs />} />}
          />
          <Route
            path="/Raj-Group-Offices"
            element={<Saidbar page={<RajGroupOffices />} />}
          />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
