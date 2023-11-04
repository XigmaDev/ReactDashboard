import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Maincontent from "./components/Layout/Maincontent";
export default function Dashboard() {
  return (
    <div className="flex m-0 font-sans h-screen antialiased font-normal text-base leading-default bg-gray-800 text-slate-500">
      <Sidebar />
      <div className="w-5/6">
          <Navbar />
          <Maincontent />
      </div>
    </div>
  );
}