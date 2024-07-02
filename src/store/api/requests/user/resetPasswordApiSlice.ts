import { TUESDAY_APP_API } from "../../apiSlice";

export const resetPasswordApiSlice = TUESDAY_APP_API.injectEndpoints({
  endpoints: (builder:any) => ({
    resetPassword: builder.mutation({
      query: (credentials:any) => {
        return {
          url: "/auth/reset-password",
          method: "POST",
          body: { ...credentials },
        };
      },
      invalidatesTags: [],
    }),
  }),
});

export const { useResetPasswordMutation } = resetPasswordApiSlice;
