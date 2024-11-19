import { ArrowPathRoundedSquareIcon, PlayIcon } from '@heroicons/react/24/solid';
import { PlayCircleIcon } from '@heroicons/react/24/solid';
import { ComputerDesktopIcon, MusicalNoteIcon, PlusCircleIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline';
import React from 'react';
import ProgressBar from '../ProgressBar';

const PlayerSection: React.FC = () => {
  return (
    <div className="h-32 relative">
      <div className="fixed bottom-0 z-0 flex gap-7">
        <div className="flex items-center gap-3 m-8 relative w-[240px]">
          <div className="w-16 h-16 rounded-full bg-pink-900 border-pink-400 border-[3px]"></div>
          <div>
            <p className='text-white'>Mind-Blowing</p>
            <p className='text-white text-[12px] opacity-40'>Various Artists</p>
          </div>
          <PlusCircleIcon className='w-5 h-5 absolute top-0 right-0 text-white'/>
        </div>
        <div className='flex gap-7 justify-between items-center'>
            <ArrowPathRoundedSquareIcon className='text-white opacity-30 w-7 h-7'/>
            <PlayIcon className='text-white w-8 h-8 rotate-[180deg]'/>
            <PlayCircleIcon className='text-white w-12 h-12'/>
            <PlayIcon className='text-white w-8 h-8'/>
            <ArrowPathRoundedSquareIcon className='text-white w-8 h-8'/>
            <ProgressBar currentTime={0} totalTime={180}/>
        </div>
        <div className='flex gap-3 justify-between items-center'>
            <MusicalNoteIcon className='text-white w-5 h-5'/>
            <ComputerDesktopIcon className='text-white w-5 h-5'/>
            <SpeakerWaveIcon className='text-white w-5 h-5'/>
            <div className='w-14 h-1 bg-white'></div>
        </div>
      </div>
    </div>
  );
};

export default PlayerSection;
