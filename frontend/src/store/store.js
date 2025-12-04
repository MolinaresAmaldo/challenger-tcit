import { configureStore } from "@reduxjs/toolkit";
import posts_reducer from "./posts_slice";

const store = configureStore({
  reducer: {
    posts: posts_reducer,
  },
});
export default store;
