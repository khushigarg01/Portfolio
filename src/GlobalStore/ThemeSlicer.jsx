import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    color: "light",
  },
  reducers: {
    turnColor: (state) => {
      state.color = state.color === "light" ? "dark" : "light";
    },
  },
});

export const { turnColor } = themeSlice.actions;
export default themeSlice.reducer;
