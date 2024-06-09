import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_baseUrl}/api/v1`,
    credentials: "include",
  }),
  tagTypes: ["user", "book"],
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (User) => ({
        url: "user",
        method: "POST",
        body: User,
      }),
      invalidatesTags: ["user", "book"],
    }),
    loginUser: builder.mutation({
      query: (userCredentials) => ({
        url: "user/jwt",
        method: "POST",
        body: userCredentials,
      }),
    }),
    logoutUser: builder.mutation({
      query: (userCredentials) => ({
        url: "user/logout",
        method: "POST",
        body: userCredentials,
      }),
    }),
    updateUserBorrowedBooks: builder.mutation({
      query: ({ email, data }) => ({
        url: `user/${email}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user", "book"],
    }),
    updateUserBorrowedBookStatus: builder.mutation({
      query: ({ userId, bookId, confirmation }) => ({
        url: `user/status/${userId}/${bookId}`,
        method: "PATCH",
        body: { confirmation },
      }),
      invalidatesTags: ["user", "book"],
    }),
    updateUserBorrowedConfirmation: builder.mutation({
      query: ({ borrowerUserId, borrowedBookId }) => ({
        url: `user/confirm/${borrowerUserId}/${borrowedBookId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["user", "book"],
    }),
    deleteRejectedRequest: builder.mutation({
      query: ({ borrowerUserId, borrowedrequestId }) => ({
        url: `user/delete/${borrowerUserId}/${borrowedrequestId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["user", "book"],
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
      invalidatesTags: ["user", "book"],
    }),
    updateUserProfileInfo: builder.mutation({
      query: ({ userEmail, info }) => ({
        url: `user/updateProfile/${userEmail}`,
        method: "PATCH",
        body: info,
      }),
      invalidatesTags: ["user", "book"],
    }),
  }),
});

export const {
  useAddUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useUpdateUserBorrowedBooksMutation,
  useGetUserBorrowedBooksQuery,
  useUpdateUserBorrowedBookStatusMutation,
  useUpdateUserBorrowedConfirmationMutation,
  useDeleteRejectedRequestMutation,
  useUpdateBookmarkMutation,
  useUpdateUserProfileInfoMutation,
} = usersApi;
