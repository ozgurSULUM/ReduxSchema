import { createApi } from '@reduxjs/toolkit/query/react';
import MockAxiosQuery from '../../service';

const hotelsApi = createApi({
    reducerPath: 'hotels',
    baseQuery: MockAxiosQuery(),
    endpoints: (builder) => ({
        getHotels: builder.query<Hotel[], any>({
            query: () => ({ url: 'getHotels', method: 'get' })
        })
    }),
})
  
export const { useGetHotelsQuery } = hotelsApi;

export default hotelsApi;