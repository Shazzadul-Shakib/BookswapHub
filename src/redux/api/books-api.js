import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_baseUrl}/api/v1`,
  }),
  tagTypes: ["book"],
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (data) => ({
        url: "book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const { useAddBookMutation } = booksApi;
