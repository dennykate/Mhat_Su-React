import { configureStore } from "@reduxjs/toolkit";
import { queryApi } from "./api/queryApi";

export const store = configureStore({
  reducer: {
    // key: keySlice,
    [queryApi.reducerPath]: queryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(queryApi.middleware),
});
