import { createReducer } from "@reduxjs/toolkit";
import {
  fetchDetailRequest,
  fetchDetailSuccess,
  fetchDetailFailure,
} from "../actions/detailsActions";

const initialState = {
  promotions: [],
  loading: false,
  error: null,
};

const detailReducers = createReducer(initialState, {
  [fetchDetailRequest]: (state) => {
    state.loading = true;
  },
  [fetchDetailSuccess]: (state, action) => {
    state.promotions = action.payload;
    state.loading = false;
  },
  [fetchDetailFailure]: (state, action) => {
    state.error = action.payload;
    state.loading = false;
  },
});

export default detailReducers;
