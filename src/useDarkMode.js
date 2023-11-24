import { useState } from 'react'

const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark')

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }
  return [theme, toggleTheme]
}
export default useDarkMode
