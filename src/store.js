import { configureStore } from "@reduxjs/toolkit";
import tagsReducer from "./reducers/tagsReducers";
import promotionsReducer from "./reducers/promotionsReducers";
import detailReducers from "./reducers/detailReducers";

const store = configureStore({
  reducer: {
    tags: tagsReducer,
    promotions: promotionsReducer,
    details: detailReducers,
  },
});

export default store;
