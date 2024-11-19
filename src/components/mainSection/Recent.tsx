import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks';
import { RootState } from '../../store';
import { fetchTracks } from '../../features/trackSlice';
import RecentCard from './RecentCard';

const Recent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { tracks, status, error } = useAppSelector((state: RootState) => state.tracks);

  const fetchData = async () => {
    dispatch(fetchTracks('2115888'));
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  const firstFourTracks = tracks.slice(0, 4);

  return (
    <div className="w-[40%] pb-5">
      <h1 className="text-lg font-bold text-gray-darker my-4">Recently Played</h1>
      <table>
        <tbody>
          {firstFourTracks.map((track, index) => (
            <RecentCard
              key={index}
              songName={track.strTrack}
              artistName={track.strArtist}
              duration={track.intDuration}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recent;