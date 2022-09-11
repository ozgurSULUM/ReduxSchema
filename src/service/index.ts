import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { mockRequests } from './mock-requests';

const ServiceConfig: AxiosRequestConfig<any> = {
  baseURL: 'localhost:6000',
}

export const Service = axios.create(ServiceConfig);

Service.interceptors.request.use(
    (request) => {
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

Service.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// *** THIS FUNCTION WILL BE REMOVED IF NOT WANT TO USE MOCK REQUESTS ***
mockRequests(Service, {delayResponse: 2000});

const AxiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await Service({ url: baseUrl + url, method, data, params })
      return result.data
    } catch (axiosError) {
      let err = axiosError as AxiosError
      console.log(err);
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

export default AxiosBaseQuery;