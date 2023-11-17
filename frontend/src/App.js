import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Maincontent from "./components/Layout/Maincontent";
import NavbarDark from "./components/Navbar/Navbar";
export default function Dashboard() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''} p-4`}>
      <div className="flex m-0 font-sans antialiased font-normal text-base leading-default min-h-screen">
        <Sidebar
          isDarkMode={isDarkMode} onClick={toggleDarkMode}
        />
        <div className="w-5/6">
          <NavbarDark />
          <Maincontent />
        </div>
      </div>
    </div>
  );
}

