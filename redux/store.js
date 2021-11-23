import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import transitionReducer from "./features/transitionSlice";

const store = configureStore({
  reducer: {
    transition: transitionReducer
  }
});

setupListeners(store.dispatch);

export default store;
