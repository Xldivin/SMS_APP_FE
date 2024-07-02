import { TUESDAY_APP_API } from "../../apiSlice";

export const lostAccessEmailApiSlice = TUESDAY_APP_API.injectEndpoints({
  endpoints: (builder:any) => ({
    lostAccessEmail: builder.mutation({
      query: (credentials:any) => {
        return {
          url: "/auth/lost-email",
          method: "POST",
          body: { ...credentials },
        };
      },
      invalidatesTags: [],
    }),
  }),
});

export const { useLostAccessEmailMutation } = lostAccessEmailApiSlice;
