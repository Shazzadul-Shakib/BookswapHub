import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_baseUrl}/api/v1`,
    credentials: "include",
  }),
  tagTypes: ["book", "user"],
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (data) => ({
        url: "book",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["book", "user"],
    }),
    getBook: builder.query({
      query: () => ({
        url: "book",
      }),
      providesTags: ["book", "user"],
    }),
    getSingleBook: builder.query({
      query: (id) => ({
        url: `book/${id}`,
      }),
      providesTags: ["book", "user"],
    }),
    deleteSingleBook: builder.mutation({
      query: ({bookId}) => ({
        url: `book/delete/${bookId}`,
        method:"DELETE"
      }),
      providesTags: ["book", "user"],
    }),
  }),
});

export const { useAddBookMutation,useGetBookQuery,useGetSingleBookQuery,useDeleteSingleBookMutation } = booksApi;
