import { createAction } from "@reduxjs/toolkit";

export const fetchDetailRequest = createAction("FETCH_DETAIL_REQUEST");
export const fetchDetailSuccess = createAction("FETCH_DETAIL_SUCCESS");
export const fetchDetailFailure = createAction("FETCH_DETAIL_FAILURE");
