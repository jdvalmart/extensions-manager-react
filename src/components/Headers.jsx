import logo from '../assets/images/logo.svg'
import logodark from '../assets/images/logo-dark.svg'
import iconmoon from '../assets/images/icon-moon.svg'
import iconsun from '../assets/images/icon-sun.svg'
import { useState } from 'react'


export const Headers = () => {

  const savedTheme = localStorage.getItem('dark')

  const [isDark, setIsDark] = useState(JSON.parse(savedTheme))

  if (JSON.parse(savedTheme)) {
    document.documentElement.classList.add('dark')
  }

  const handleClick = () => {
    const isDarkChanged = document.documentElement.classList.toggle('dark')
    setIsDark(isDarkChanged)
    localStorage.setItem('dark', isDarkChanged )
  }
  return (
    <div className=' bg-Neutral-0 dark:bg-Neutral-800 flex justify-between h-[66px] px-3 py-2 rounded-[10px] items-center mb-6'>
        <img src={ isDark ? logodark : logo} alt="logo" />
       <button onClick={handleClick} className='bg-neutral-100 size-[50px] grid place-content-center rounded-lg cursor-pointer hover:bg-Neutral-200 dark:bg-Neutral-600 dark:hover:bg-Neutral-700'>
        <img src={isDark ? iconsun  : iconmoon} alt="" />
       </button>

    </div>
  )
}
