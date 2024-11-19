// trackSlice.ts (or trackSlice.js)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Track {
  strTrack: string;
  strArtist: string;
  intDuration: string;
}

interface TrackState {
  tracks: Track[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TrackState = {
  tracks: [],
  status: 'idle',
  error: null,
};

export const fetchTracks = createAsyncThunk('tracks/fetchTracks', async (trackId: string) => {
  const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/track.php?m=${trackId}`);
  return response.data.track;
});

const trackSlice = createSlice({
  name: 'tracks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTracks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTracks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tracks = action.payload;
      })
      .addCase(fetchTracks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch tracks';
      });
  },
});


export const { actions, reducer } = trackSlice;

export default reducer;
