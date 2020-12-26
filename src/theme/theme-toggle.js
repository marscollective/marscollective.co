import React, { useContext } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

import { ThemeContext } from '@theme/theme-context'

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  function isDark() {
    return theme === 'dark'
  }

  return (
    <button
      className="ml-8 -mt-1 focus:outline-none fill-current"
      onClick={() => setTheme(isDark() ? 'light' : 'dark')}
      aria-label="Theme toggle"
    >
      {isDark() ? <BiSun size={20} /> : <BiMoon size={20} />}
    </button>
  )
}

export default ThemeToggle
