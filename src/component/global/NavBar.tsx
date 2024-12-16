"use client"

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { CiLight } from 'react-icons/ci'
import { IoMoonOutline, IoNotificationsOutline, IoPersonOutline, IoSearch, IoSettingsOutline } from 'react-icons/io5'

const NavBar = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  const NAV_ITEM = [
    {
      'name': 'theme',
      'icon': theme === 'dark' ? <IoMoonOutline className='w-[30px] h-[30px]'/> : <CiLight className='w-[40px] h-[30px]' />
    },
    {
      'name': 'notification',
      'icon': <IoNotificationsOutline className='w-[40px] h-[30px]'/>
    },
    {
      'name': 'settings',
      'icon': <IoSettingsOutline className='w-[40px] h-[30px]'/>
    },
    {
      'name': 'profile',
      'icon': <IoPersonOutline className='w-[40px] h-[30px]'/>
    },
  ]


  const handleNavButton = (item: string) => {
    switch (item){
      case "theme":
        if(theme === "dark"){
          setTheme('light')
          console.log("set to light")
        } else {
          console.log("set to dark")
          setTheme('dark')
        }
      break

      default:
        break
    }
  }

  return (
    <nav className='flex justify-between p-4 dark:text-white text-black'>
      <div className='relative'>
        <input 
          placeholder='Search ...'
          className='px-1 py-2 sm:w-[300px] rounded-lg bg-light-400 dark:bg-primary-400 focus:outline-none'
        />
        <IoSearch  className='absolute right-1 top-1/2 -translate-y-1/2'/>
      </div>
      <ul
        className='flex gap-2'
      >
        {NAV_ITEM.map((item) => (
          <li
          className='!cursor-pointer'
          key={item.name}
          onClick={() => handleNavButton(item.name)}
        >
          {item.icon}
        </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar