import { TUESDAY_APP_API } from "../../apiSlice";

export const verifyPhoneOtpApiSlice = TUESDAY_APP_API.injectEndpoints({
  endpoints: (builder:any) => ({
    verifyPhoneOtp: builder.mutation({
      query: (credentials:any) => {
        return {
          url: "/auth/verify-mobile-otp",
          method: "POST",
          body: { ...credentials },
        };
      },
      invalidatesTags: [],
    }),
  }),
});

export const { useVerifyPhoneOtpMutation } = verifyPhoneOtpApiSlice;
