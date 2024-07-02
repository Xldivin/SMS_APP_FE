import { TUESDAY_APP_API } from "../../apiSlice";

export const getOrderBookApiSlice = TUESDAY_APP_API.injectEndpoints({
  endpoints: (builder:any) => ({
    getOrderBook: builder.query({
      query: (data:any) => ({
        url: `/orders/stock/${data.stockId}`,
        providesTags: ["ORDERS"],
      }),
    }),
  }),
});

export const { useGetOrderBookQuery } = getOrderBookApiSlice;
