import { TUESDAY_APP_API } from "../../apiSlice";

export const addOrderApiSlice = TUESDAY_APP_API.injectEndpoints({
  endpoints: (builder: any) => ({
    addOrder: builder.mutation({
      query: (credentials: any) => {
        return {
          url: "/orders",
          method: "POST",
          body: { ...credentials },
        };
      },
      invalidatesTags: ["ORDERS"],
    }),
  }),
});

export const { useAddOrderMutation } = addOrderApiSlice;
