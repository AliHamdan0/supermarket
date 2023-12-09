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

export const fetchItems = createAsyncThunk("cartState/fetchItems", async () => {
  const response = await getValueFor("myCart");
  return response;
});

export interface cartState {
  value: cartItem[];
}
const initialState: cartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cartState",
  initialState,
  reducers: {
    changeQtn: (
      state,
      action: PayloadAction<{ index: number; newQtn: number }>
    ) => {
      const { payload } = action;
      const { index, newQtn } = payload;
      state.value[index].quantity = newQtn;
      state.value[index].price = (
        newQtn * state.value[index].singlePrice
      ).toFixed(2);
      save("myCart", state.value);
    },
    addItem: (state, action: PayloadAction<cartItem>) => {
      state.value.push(action.payload);
      save("myCart", state.value);
    },
    deleteItem: (state, action: PayloadAction<{ index: number }>) => {
      state.value.splice(action.payload.index, 1);
      save("myCart", state.value);
    },
    clearCart: (state) => {
      state.value = [];
      save("myCart", state.value);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      // Add user to the state array
      state.value = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { changeQtn, addItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
