import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Maincontent from "./components/Layout/Maincontent";
import NavbarDark from "./components/Navbar/Navbar";
import useDarkMode from "./useDarkMode";
export default function Dashboard() {

  const [isDarkMode, setIsDarkMode] = useState(true);

  const [theme, toggleTheme] = useDarkMode()
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900' : ''} p-4 `}>
      <div className=" flex m-0 font-sans antialiased font-normal text-base leading-default min-h-screen">
        <Sidebar
        theme={theme}
        toggleTheme={toggleTheme}
        />
        <div className="w-5/6">
          <NavbarDark 
          theme={theme}
          />
          <Maincontent />
        </div>
      </div>
    </div>
  );
}

