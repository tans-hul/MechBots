import React from 'react'
import Logo from '../assets/Logo.svg'
const TopNavbar = () => {
  return (

    <div className=' flex flex-row justify-start items-center gap-24 top-5 min-w-full mx-10 h-32 text-xl'>
      <div className='absolute left-16'>
        <img src={Logo} alt="Logo" width='80rem' />
      </div>
      <div className='flex flex-row gap-20 px-10'>
        <div className=''> Home </div>
        <div className=''> About us </div>
        <div className=''> Our Team </div>
      </div>

      <div className='absolute right-32 border-[0.846154px] border-solid px-5 py-2'> EXPLORE MORE</div>
    </div>
  )
}

export default TopNavbar