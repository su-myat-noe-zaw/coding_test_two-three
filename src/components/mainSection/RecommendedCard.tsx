import { PlayCircleIcon } from '@heroicons/react/24/outline';
import React from 'react'

export interface SongInfo {
    songName: string;
    artistName: string;
}
  
const RecommendedCard: React.FC<SongInfo> = ({ songName, artistName }) => {
  return (
    <div>
        <div className="flex justify-center items-center w-40 h-40 bg-gray-light rounded-lg hover:bg-gray-dark">
          <PlayCircleIcon className="w-14 h-14 text-gray-light" />
        </div>
        <div className='flex flex-col mt-2 px-1'>
            <p className='text-xs text-gray-darker'>{songName}</p>
            <p className='text-gray-dark text-[10px]'>{artistName}</p>
        </div>
    </div>
  )
}

export default RecommendedCard