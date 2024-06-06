import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_baseUrl}/api/v1`,
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (User) => ({
        url: "user",
        method: "POST",
        body: User,
      }),
      invalidatesTags: ["user"],
    }),
    updateUserBorrowedBooks: builder.mutation({
      query: ({ email, data }) => ({
        url: `user/${email}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    updateUserBorrowedBookStatus: builder.mutation({
      query: ({ userId, bookId, confirmation }) => ({
        url: `user/status/${userId}/${bookId}`,
        method: "PATCH",
        body: { confirmation },
      }),
      invalidatesTags: ["user"],
    }),
    updateUserBorrowedConfirmation: builder.mutation({
      query: ({ borrowerUserId, borrowedBookId }) => ({
        url: `user/confirm/${borrowerUserId}/${borrowedBookId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["user"],
    }),
    deleteRejectedRequest: builder.mutation({
      query: ({ borrowerUserId, borrowedrequestId }) => ({
        url: `user/delete/${borrowerUserId}/${borrowedrequestId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["user"],
    }),
    getUserBorrowedBooks: builder.query({
      query: (email) => ({
        url: `user/${email}`,
      }),
      providesTags: ["user"],
    }),
    updateBookmark: builder.mutation({
      query: ({ ownerEmail, data }) => ({
        url: `user/bookmark/${ownerEmail}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    updateUserProfileInfo: builder.mutation({
      query: ({ userEmail, info }) => ({
        url: `user/updateProfile/${userEmail}`,
        method: "PATCH",
        body: info,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useAddUserMutation,
  useUpdateUserBorrowedBooksMutation,
  useGetUserBorrowedBooksQuery,
  useUpdateUserBorrowedBookStatusMutation,
  useUpdateUserBorrowedConfirmationMutation,
  useDeleteRejectedRequestMutation,
  useUpdateBookmarkMutation,
  useUpdateUserProfileInfoMutation,
} = usersApi;
