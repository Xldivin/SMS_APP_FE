import { TUESDAY_APP_API } from "../../apiSlice";

export const getAllCategoriesApiSlice = TUESDAY_APP_API.injectEndpoints({
  endpoints: (builder:any) => ({
    getAllStocks: builder.query({
      query: () => ({
        url: "/stocks",
        providesTags: ["STOCKS"],
      }),
    }),
  }),
});

export const { useGetAllStocksQuery } = getAllCategoriesApiSlice;
