import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  isLoading: false,
  error: null,
};

const tagsReducer = createReducer(initialState, {
  FETCH_TAGS_REQUEST: (state) => {
    state.isLoading = true;
  },
  FETCH_TAGS_SUCCESS: (state, action) => {
    state.tags = action.payload;
    state.isLoading = false;
    state.error = null;
  },
  FETCH_TAGS_FAILURE: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});

export default tagsReducer;
