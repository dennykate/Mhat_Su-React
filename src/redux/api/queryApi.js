import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import config from "@/config";

const baseQuery = fetchBaseQuery({
  baseUrl: config.baseUrl, // Your API base URL
});

export const queryApi = createApi({
  reducerPath: "queryApi",
  baseQuery,
  tagTypes: ["Data"],
  endpoints: (builder) => ({
    getData: builder.query({
      query: (url) => url,
      keepUnusedDataFor: 3600,
      providesTags: ["Data"],
    }),
    postData: builder.mutation({
      query: ({ url, body, method }) => {
        return {
          url,
          method,
          body,
        };
      },
      invalidatesTags: ["Data"],
    }),
  }),
});

export const { useGetDataQuery, usePostDataMutation } = queryApi;
