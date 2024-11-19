import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Header: React.FC = () => {
  return (
    <div className='w-full bg-white flex justify-between p-5'>
        <MagnifyingGlassIcon className='w-6 h-6'/>
        <div className='relative'>
            <div className='absolute top-0 end-0 text-[7px] w-3 h-3 bg-primary-default text-white flex justify-center items-center rounded-full border border-white border-1'>3</div>
            <BellIcon className='w-6 h-6'/>
        </div>
    </div>
  )
}

export default Header