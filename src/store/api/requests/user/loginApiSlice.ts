import { TUESDAY_APP_API } from "../../apiSlice";

export const loginApiSlice = TUESDAY_APP_API.injectEndpoints({
  endpoints: (builder:any) => ({
    login: builder.mutation({
      query: (credentials:any) => {
        return {
          url: "/auth/login-email",
          method: "POST",
          body: { ...credentials },
        };
      },
      invalidatesTags: [],
    }),
  }),
});

export const { useLoginMutation } = loginApiSlice;
