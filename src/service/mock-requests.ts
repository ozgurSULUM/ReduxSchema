import { AxiosInstance } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { hotels } from './mock-datas';

export const mockRequests = (
    mockService: AxiosInstance,
    options: {
        delayResponse?: number;
        onNoMatch?: 'passthrough' | 'throwException';
    }) => {
    const mock = new MockAdapter(mockService, options);
    
    mock.onGet('/getHotels').reply(200, {data: hotels});
};