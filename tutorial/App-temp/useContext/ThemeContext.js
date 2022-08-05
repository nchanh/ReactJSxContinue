import { createContext, useState } from "react";

export const ThemeContext = createContext()

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState()

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const contextTheme = {
    theme,
    handleChangeTheme
  }

  return (
    <ThemeContext.Provider value={contextTheme}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider