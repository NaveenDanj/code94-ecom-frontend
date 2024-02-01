import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../../types/types';

export interface UserState {
  userData: IUser | null;
}


const initialState: UserState = {
  userData: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
    setUser: (state , action: PayloadAction<IUser | null>) => {
      state.userData = action.payload;
    },

  },
});

export const { setUser  } = userSlice.actions;
export default userSlice.reducer;