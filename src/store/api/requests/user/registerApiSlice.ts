import { TUESDAY_APP_API } from "../../apiSlice";

export const registerApiSlice = TUESDAY_APP_API.injectEndpoints({
  endpoints: (builder:any) => ({
    register: builder.mutation({
      query: (credentials:any) => {
        return {
          url: "/auth/signup",
          method: "POST",
          body: { ...credentials },
        };
      },
      invalidatesTags: [],
    }),
  }),
});

export const { useRegisterMutation } = registerApiSlice;
