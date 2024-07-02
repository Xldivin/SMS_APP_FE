import { TUESDAY_APP_API } from "../../apiSlice";

export const sendResetPasswordApiSlice = TUESDAY_APP_API.injectEndpoints({
  endpoints: (builder:any) => ({
    sendResetPassword: builder.mutation({
      query: (credentials:any) => {
        return {
          url: "/auth/send-reset-password",
          method: "POST",
          body: { ...credentials },
        };
      },
      invalidatesTags: [],
    }),
  }),
});

export const { useSendResetPasswordMutation } = sendResetPasswordApiSlice;
