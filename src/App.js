import React, { useState, useEffect } from 'react'
import Sidebar from './components/Layout/Sidebar'
import Maincontent from './components/Layout/Maincontent'
import MainNavbar from './components/Layout/Navbar'
import useDarkMode from './useDarkMode'

function Dashboard() {
  const [theme, toggleTheme] = useDarkMode()
  const [profile, setProfile] = useState(null)
  const [openSidenav, setOpenSidenav] = useState(false)
  const [trafficdata, setTrafficdata] = useState([22, 78])
  const [roiData, setRoidata] = useState([50, 40, 300, 320, 500, 350, 200, 230, 500])
  const [seriesData, setSeriesData] = useState([25, 4, 20, 15])

  // "symbol": "BTCUSDT",
  // "interval": "1M",
  // "startTime": "2021-11",
  // "endTime": "2023-11",
  // "limit": 500,
  useEffect(() => {
    fetch('https://api.binance.us/api/v3/klines?interval=1M&symbol=BTCUSDT&limit=8')
      .then((res) => res.json())
      .then((data) => {
        const array = []
        for (let index = 0; index < data.length; index++) {
          array.push(data[index][4])
        }
        console.log(array)
        setRoidata(array)
      })
  },[])
  useEffect(() => {
    fetch('https://randomuser.me/api')
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.results[0])
        const integer = parseInt(data.results[0].login.sha1, 16)
        console.log(integer)
        const digits = integer.toString().split('').map(Number)
        const array = []
        let counter = 0
        for (let i = 0; i < digits.length; i += 2) {
          const element = i + 1 < digits.length ? digits[i] + digits[i + 1] : 0 + digits[i]
          if (!isNaN(element)) {
            array.push(element)
          }
        }
        for (let i = 0; i < array.length; i++) {
          if (array[i] < 10) {
            counter += 1
          }
        }
        console.log(counter)
        while (array.length < 4) {
          array.unshift([0])
        }
        console.log(array)
        setTrafficdata([parseInt((counter * 100) / array.length), parseInt(100 - (counter * 100 / array.length))])
        setSeriesData([array[0], array[1], array[2], array[3]])

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
        <Sidebar theme={theme} toggleTheme={toggleTheme} data={profile} openSidenav={openSidenav} />
        <div className="xl:ml-80">
          <MainNavbar theme={theme} setOpenSidenav={setOpenSidenav} openSidenav={openSidenav} />
          <Maincontent data={profile} trafficdata={trafficdata} roiData={roiData} seriesData={seriesData} />
        </div>
      </div>
    </div>
  )
}
export default Dashboard
