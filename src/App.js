import React, { useState, useEffect } from 'react'
import Sidebar from './components/Layout/Sidebar'
import Maincontent from './components/Layout/Maincontent'
import MainNavbar from './components/Layout/Navbar'
import useDarkMode from './useDarkMode'

function Dashboard() {
  const [theme, toggleTheme] = useDarkMode()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.results[0])
      })
  }, [])

  if (profile === null) {
    return (
      <div className="font-extrabold flex justify-center min-h-screen">
        loading....
      </div>
    )
  }

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900' : ''} p-4 `}>
      <div className="flex m-0 font-sans antialiased font-normal text-base leading-default min-h-screen">
        <Sidebar theme={theme} toggleTheme={toggleTheme} data={profile} />
        <div className="w-5/6">
          <MainNavbar theme={theme} />
          <Maincontent data={profile} />
        </div>
      </div>
    </div>
  )
}
export default Dashboard
