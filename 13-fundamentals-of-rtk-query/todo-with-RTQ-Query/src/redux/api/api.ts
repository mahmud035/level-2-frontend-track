import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['todo'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();
        if (priority) {
          params.append('priority', priority);
        }
        return {
          url: `/tasks`,
          method: 'GET',
          params: params,
        };
      },
      providesTags: ['todo'],
    }),
    getSingleTodo: builder.query({
      query: (id) => {
        console.log('Inside baseApi =>', id);
        return {
          url: `/tasks/${id}`,
          method: 'GET',
          params: { id },
        };
      },
      // providesTags: ['todo'],
    }),
    addTodo: builder.mutation({
      query: (data) => {
        console.log('Inside baseApi =>', data);
        return {
          url: '/tasks',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['todo'],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
        params: { id },
      }),
      invalidatesTags: ['todo'],
    }),
    editTodo: builder.mutation({
      query: (options) => {
        console.log('Inside baseApi =>', options);
        return {
          url: `/tasks/${options.id}`,
          method: 'PUT',
          body: options.data,
          params: { id: options.id },
        };
      },
      invalidatesTags: ['todo'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetSingleTodoQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
} = baseApi;
