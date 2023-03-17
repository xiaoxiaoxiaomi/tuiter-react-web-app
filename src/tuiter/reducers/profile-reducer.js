import {createSlice} from "@reduxjs/toolkit";
import profile from '../data/profile.json';

const profileSlice = createSlice({
  name: 'profile',
  initialState: profile,
  reducers: {

  }
});

export default profileSlice.reducer;