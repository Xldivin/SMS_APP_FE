import { TUESDAY_APP_API } from "../../apiSlice";

export const sendPhoneOtpApiSlice = TUESDAY_APP_API.injectEndpoints({
  endpoints: (builder:any) => ({
    sendPhoneOtp: builder.mutation({
      query: (credentials:any) => {
        return {
          url: "/auth/send-mobile-otp",
          method: "POST",
          body: { ...credentials },
        };
      },
      invalidatesTags: [],
    }),
  }),
});

export const { useSendPhoneOtpMutation } = sendPhoneOtpApiSlice;
