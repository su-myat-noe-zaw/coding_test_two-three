import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks';
import { RootState } from '../../store';
import { fetchTracks } from '../../features/trackSlice';
import RecommendedCard from './RecommendedCard';

const Recommendation: React.FC = () => {
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

  const lastThreeTracks = tracks.slice(-3);

  return (
    <div className="w-[60%] pb-5">
      <h1 className="text-lg font-bold text-gray-darker my-4 capitalize">
        Recommended For you
      </h1>
      <div className="flex gap-8">
        {lastThreeTracks.map((track, index) => (
          <RecommendedCard
            key={index}
            songName={track.strTrack}
            artistName={track.strArtist}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
