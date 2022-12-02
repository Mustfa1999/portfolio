import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { isVisible: true };

const headerSlice = createSlice({
  name: "headerReducer",
  initialState,
  reducers: {
    toggleIsVisible(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

const reduxStore = configureStore({
  reducer: { headerReducer: headerSlice.reducer }, // we can provide multiple reducers
});

export const headerActions = headerSlice.actions;

export default reduxStore;
