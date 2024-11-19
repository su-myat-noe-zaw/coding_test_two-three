import React from 'react';
import {
  EllipsisHorizontalIcon,
  HeartIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/outline';

export interface SongInfo {
  songName: string;
  artistName: string;
  duration: string;
}

const convertTheText = (text: string, maxLength: number): string => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};

const RecentCard: React.FC<SongInfo> = ({ songName, artistName, duration }) => {
  return (
    <tr className="group hover:bg-gray-light hover:bg-opacity-40 rounded-md">
      <td className="p-3">
        <div className="flex justify-center items-center w-8 h-8 bg-gray-light rounded-sm group-hover:bg-gray-dark">
          <PlayCircleIcon className="w-7 h-7 text-gray-light" />
        </div>
      </td>
      <td className="p-3 text-gray-600 font-bold text-[10px] truncate">
        {convertTheText(songName, 20)}
      </td>
      <td className="py-5 text-gray-dark opacity-70 text-[10px] truncate">
        {convertTheText(artistName, 20)}
      </td>
      <td className="py-5 text-gray-dark opacity-70 text-[10px] px-7">{duration}</td>
      <td className="py-5 px-7">
        <HeartIcon className="w-4 h-4 text-gray-dark opacity-70 transition-transform duration-200 hover:scale-110" />
      </td>
      <td className="py-5 px-7">
        <EllipsisHorizontalIcon className="w-4 h-4 text-gray-dark opacity-70 transition-transform duration-200 hover:scale-110" />
      </td>
    </tr>
  );
};

export default RecentCard;
