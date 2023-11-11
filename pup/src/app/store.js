import { configureStore } from "@reduxjs/toolkit";

import { puppyBowlApi } from "../api/puppyBowlApi";


export const store = configureStore({
  reducer: { 
    puppyBowlApi: puppyBowlApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(puppyBowlApi.middleware);
  },
});

