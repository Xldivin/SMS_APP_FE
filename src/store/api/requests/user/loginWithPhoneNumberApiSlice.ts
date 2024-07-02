import { TUESDAY_APP_API } from "../../apiSlice";

export const loginWithPhoneApiSlice = TUESDAY_APP_API.injectEndpoints({
  endpoints: (builder:any) => ({
    loginWithPhone: builder.mutation({
      query: (credentials:any) => {
        return {
          url: "/auth/login-phone",
          method: "POST",
          body: { ...credentials },
        };
      },
      invalidatesTags: [],
    }),
  }),
});

export const { useLoginWithPhoneMutation } = loginWithPhoneApiSlice;
