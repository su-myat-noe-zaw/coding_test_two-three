import React from 'react'
import Sidebar from '../components/Sidebar'
import MainSection from '../components/mainSection/MainSection'
import PlayerSection from '../components/playerSection/PlayerSection'

const MainPage: React.FC = () => {
  return (
    <div className='gap-4 relative bg-primary-default overflow-hidden'>
        <div className='flex gap-3 bg-white rounded-b-[40px] h-fit shadow-xl relative z-10'>
            {/* sidebar */}
            <Sidebar/>
            {/* main page */}
            <MainSection/>
        </div>
        {/* player section */}
        <PlayerSection/>
    </div>
  )
}

export default MainPage