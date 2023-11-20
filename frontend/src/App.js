import React from "react";
import Sidebar from "./components/Layout/Sidebar";
import Maincontent from "./components/Layout/Maincontent";
import useDarkMode from "./useDarkMode";
import MainNavbar from "./components/Layout/Navbar";


function Dashboard() {

  const [theme, toggleTheme] = useDarkMode()
  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900' : ''} p-4 `}>
      <div className=" flex m-0 font-sans antialiased font-normal text-base leading-default min-h-screen">
        <Sidebar
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <div className="w-5/6">
          <MainNavbar
            theme={theme}
          />
          <Maincontent />
        </div>
      </div>
    </div>
  );
}
export default Dashboard
