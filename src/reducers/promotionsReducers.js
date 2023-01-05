import { createReducer } from "@reduxjs/toolkit";
import {
  fetchPromotionsRequest,
  fetchPromotionsSuccess,
  fetchPromotionsFailure,
} from "../actions/promotionsActions";

const initialState = {
  promotions: [],
  loading: false,
  error: null,
};

const promotionsReducer = createReducer(initialState, {
  [fetchPromotionsRequest]: (state) => {
    state.loading = true;
  },
  [fetchPromotionsSuccess]: (state, action) => {
    state.promotions = action.payload;
    state.loading = false;
  },
  [fetchPromotionsFailure]: (state, action) => {
    state.error = action.payload;
    state.loading = false;
  },
});

export default promotionsReducer;
