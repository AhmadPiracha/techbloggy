"use client"
import React, { useContext } from 'react'
import { ThemeContext } from '@/context/themeContext'
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../../../public/svg/MoonIcon";
import { SunIcon } from "../../../public/svg/SunIcon";


const ThemeToggle = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  // console.log(theme, toggleTheme)
  return (
    <Switch
    defaultSelected
    style={{ margin: "0 10px"
    }}
    size="lg"
    thumbIcon={({ isSelected, className }) =>
      isSelected ? (
        <SunIcon className={className} />
      ) : (
        <MoonIcon className={className} />
      )
    }
    onClick={toggleTheme}
  />

  )
}

export default ThemeToggle