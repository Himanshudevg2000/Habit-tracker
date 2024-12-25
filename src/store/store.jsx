import { configureStore } from "@reduxjs/toolkit";
import habitReducers from "./habitSLice";

const store = configureStore({
  reducer: {
    habits: habitReducers,
  },
});

export default store;
