import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from "./reducers/tagsReducers";
import promotionsReducer from "./reducers/promotionsReducers";

const store = configureStore({
  reducer: {
    tags: tagsReducer,
    promotions: promotionsReducer,
  },
});

export default store;
