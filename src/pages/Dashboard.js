import React from "react";
import { Outlet } from "react-router-dom";
import Head from "../components/Head";

function Dashboard({ onLogout }) {
  return (
    <div className="app-container">
      <Head logout={onLogout} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
