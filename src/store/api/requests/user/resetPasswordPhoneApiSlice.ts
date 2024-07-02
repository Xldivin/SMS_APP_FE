import { TUESDAY_APP_API } from "../../apiSlice";

export const resetPasswordPhoneApiSlice = TUESDAY_APP_API.injectEndpoints({
  endpoints: (builder:any) => ({
    resetPasswordPhone: builder.mutation({
      query: (credentials:any) => {
        return {
          url: "/auth/reset-passcode-phone",
          method: "POST",
          body: { ...credentials },
        };
      },
      invalidatesTags: [],
    }),
  }),
});

export const { useResetPasswordPhoneMutation } = resetPasswordPhoneApiSlice;
