import { TUESDAY_APP_API } from "../../apiSlice";

export const sendEmailOtpApiSlice = TUESDAY_APP_API.injectEndpoints({
  endpoints: (builder:any) => ({
    sendEmailOtp: builder.mutation({
      query: (credentials:any) => {
        return {
          url: "/auth/send-email-otp",
          method: "POST",
          body: { ...credentials },
        };
      },
      invalidatesTags: [],
    }),
  }),
});

export const { useSendEmailOtpMutation } = sendEmailOtpApiSlice;
