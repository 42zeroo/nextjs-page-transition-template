import { createSlice } from "@reduxjs/toolkit";
import { way_up, way_right, way_left, way_down } from "./transitionWays";

const initialState = {
  way: way_right(200),
  timeout: 200
};

export const transitionSlice = createSlice({
  name: "transition",
  initialState,
  reducers: {
    setTimeout: (state, action) => {
      state.timeout = action.payload;
    },
    setWay: (state, action) => {
      state.way = action.payload;
    },
    setWayUp: (state) => {
      state.way = way_up(state.timeout);
    },
    setWayDown: (state) => {
      state.way = way_down(state.timeout);
    },
    setWayLeft: (state) => {
      state.way = way_left(state.timeout);
    },
    setWayRight: (state) => {
      state.way = way_right(state.timeout);
    }
  }
});

export const {
  setTimeout,
  setWay,
  setWayUp,
  setWayDown,
  setWayLeft,
  setWayRight
} = transitionSlice.actions;

export default transitionSlice.reducer;
