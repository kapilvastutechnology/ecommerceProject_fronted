import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const base = 'http://192.168.18.222:5000';

export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery:fetchBaseQuery({baseUrl: 'http://192.168.18.222:5000/api'}),
    endpoints:(builder) => ({})
});