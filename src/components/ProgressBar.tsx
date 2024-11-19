import React from 'react';

interface ProgressBarProps {
  currentTime: number;
  totalTime: number;
}

const formatTime = (timeInSeconds: number): string => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ currentTime, totalTime }) => {
  const progress = (currentTime / totalTime) * 100;

  return (
    <div>
      <div className="flex items-center gap-2 justify-between text-sm text-gray-600 mt-1">
        <span className="text-white text-xs">{formatTime(currentTime)}</span>
        <div className="relative w-[400px] bg-pink-700 rounded-full h-1">
          <div
            className="absolute top-0 left-0 h-1 bg-pink-900 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
          <div
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 border-[3px] border-white bg-primary-default rounded-full"
            style={{ left: `${progress}%` }}
          ></div>
        </div>
        <span className="text-white text-xs">{formatTime(totalTime)}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
