import { TUESDAY_APP_API } from "../../apiSlice";

export const lostAccessPhoneApiSlice = TUESDAY_APP_API.injectEndpoints({
  endpoints: (builder:any) => ({
    lostAccessPhone: builder.mutation({
      query: (credentials:any) => {
        return {
          url: "/auth/lost-phone",
          method: "POST",
          body: { ...credentials },
        };
      },
      invalidatesTags: [],
    }),
  }),
});

export const { useLostAccessPhoneMutation } = lostAccessPhoneApiSlice;
