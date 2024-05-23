import { configureStore } from "@reduxjs/toolkit";
import { booksApi } from "./api/books-api";
import { usersApi } from "./api/users-api";

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    [usersApi.reducerPath]:usersApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware,usersApi.middleware),
});
