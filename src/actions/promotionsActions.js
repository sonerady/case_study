import { createAction } from "@reduxjs/toolkit";

export const fetchPromotionsRequest = createAction("FETCH_PROMOTIONS_REQUEST");
export const fetchPromotionsSuccess = createAction("FETCH_PROMOTIONS_SUCCESS");
export const fetchPromotionsFailure = createAction("FETCH_PROMOTIONS_FAILURE");
