"use client"
import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

const getLocalStorageTheme = () => {
    if (typeof window !== 'undefined') {
        const value = localStorage.getItem('theme');
        return value || 'light';
    }
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return getLocalStorageTheme()
    });

    const toggleTheme = () => {
       setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)
    }
    , [theme])

    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
