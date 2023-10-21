"use client"
import React, { useContext } from 'react'
import { ThemeContext } from '@/context/themeContext'
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../../../public/svg/MoonIcon";
import { SunIcon } from "../../../public/svg/SunIcon";


const ThemeToggle = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme, toggleTheme)
  return (
    <>
      <Switch
        defaultSelected
        size="lg"
        color="success"
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        onClick={toggleTheme}
      />
    </>

  )
}

export default ThemeToggle