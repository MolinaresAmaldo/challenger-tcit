import { createSlice } from "@reduxjs/toolkit";

const post_slice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
    search_term: "",
  },
  reducers: {
    set_posts: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
      state.error = null;
    },
    add_post: (state, action) => {
      state.posts.push(action.payload);
    },
    remove_post: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
    set_loading: (state, action) => {
      state.loading = action.payload;
    },
    set_error: (state, action) => {
      state.error = action.payload;
    },
    set_search_term: (state, action) => {
      state.search_term = action.payload;
    },
  },
});

export const {
  set_posts,
  add_post,
  remove_post,
  set_loading,
  set_error,
  set_search_term,
} = post_slice.actions;
export default post_slice.reducer;
