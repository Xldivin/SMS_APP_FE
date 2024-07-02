import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type RootState } from "..";

const TUESDAY_APP_BASE_QUERY = fetchBaseQuery({
  baseUrl: "https://api.tuesday.africa/api/v1",
  prepareHeaders: (headers: any, { getState }: any) => {
    const { accessToken } = (getState() as RootState).auth;
    if (accessToken != null) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
});

export const TUESDAY_APP_API = createApi({
  baseQuery: TUESDAY_APP_BASE_QUERY,
  endpoints: () => ({}),
  // keepUnusedDataFor: 0,
  tagTypes: ["STOCKS", "ORDERS"],
});
