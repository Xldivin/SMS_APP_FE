import { TUESDAY_APP_API } from "../../apiSlice";

export const getSingleStockApiSlice = TUESDAY_APP_API.injectEndpoints({
  endpoints: (builder:any) => ({
    getSingleStockA: builder.query({
      query: (data:any) => ({
        url: `/stocks/${data.id}`,
        providesTags: ["STOCKS"],
      }),
    }),
  }),
});

export const { useGetSingleStockAQuery } = getSingleStockApiSlice;
