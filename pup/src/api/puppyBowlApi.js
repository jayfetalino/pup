import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const puppyBowlApi = createApi({
    reducerPath: "puppyBowlApi",
    baseQuery: fetchBaseQuery({
        baseUrl:
        "https://fsa-puppy-bowl.herokuapp.com/api/2306-FSA-ET-WEB-PT-SF/players",
    }),
    enpoints: (builder) => ({
        getPuppies: builder.query({
            query: () => "",
        }),
    }),
});