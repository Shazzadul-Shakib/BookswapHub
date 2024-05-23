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
      invalidatesTags:["user"],
    }),
  }),
});

export const {useAddUserMutation}=usersApi;
