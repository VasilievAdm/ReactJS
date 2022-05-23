import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProfileState {
  visible: boolean;
  name: string;
  auth: boolean;
}

const initialState: ProfileState = {
  visible: true,
  name: 'default name',
  auth: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    changeAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },
    toggleProfile: (state) => {
      state.visible = !state.visible;
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { changeAuth, toggleProfile, changeName } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
