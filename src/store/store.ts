import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    // user: userReducer,
    // chatrooms: chatroomReducer,
    // currentChat: currentChatReducer,
    // callInfo: callInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch