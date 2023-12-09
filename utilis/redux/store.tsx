import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import favSlice from "./Slices/favSlice";
export const store = configureStore({
  reducer: {
    cart: cartSlice,
    fav: favSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
