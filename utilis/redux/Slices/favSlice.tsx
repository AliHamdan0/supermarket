import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { cartItem } from "../../../types";
import * as SecureStore from "expo-secure-store";

async function save(key: string, value: cartItem[]) {
  await SecureStore.setItemAsync(key, JSON.stringify(value));
}

async function getValueFor(key: string) {
  //@ts-ignore
  let result = JSON.parse(await SecureStore.getItemAsync(key));
  return result;
}

export const fetchFavItems = createAsyncThunk(
  "favState/fetchFavItems",
  async () => {
    const response = await getValueFor("myFav");
    return response;
  }
);
export interface cartState {
  value: cartItem[];
}
const initialState: cartState = {
  value: [],
};

export const favSlice = createSlice({
  name: "favState",
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<cartItem>) => {
      state.value.push(action.payload);
      save("myFav", state.value);
    },
    deleteFav: (state, action: PayloadAction<{ index: number }>) => {
      state.value.splice(action.payload.index, 1);
      save("myFav", state.value);
    },
    clearFav: (state) => {
      state.value = [];
      save("myFav", state.value);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchFavItems.fulfilled, (state, action) => {
      // Add user to the state array
      state.value = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { addFav, deleteFav, clearFav } = favSlice.actions;

export default favSlice.reducer;
