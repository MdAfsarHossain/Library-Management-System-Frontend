import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_API}`,
  }),
  tagTypes: ["books", "borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "books",
      providesTags: ["books"],
    }),
    borrowSummary: builder.query({
      query: () => "borrow",
      providesTags: ["borrow"],
    }),
    getSingleBook: builder.query({
      query: (bookId) => `books/${bookId}`,
      providesTags: ["books"],
    }),
    createBook: builder.mutation({
      query: (newBook) => ({
        url: "books",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (bookId) => ({
        url: `books/${bookId}`,
        method: "DELETE",
        body: bookId,
      }),
      invalidatesTags: ["books"],
    }),
    editBook: builder.mutation({
      query: (editBookData) => ({
        url: `books/${editBookData?.bookId}`,
        method: "PUT",
        body: editBookData,
      }),
      invalidatesTags: ["books"],
    }),
    borrowBook: builder.mutation({
      query: (borrowBookData) => ({
        url: "borrow",
        method: "POST",
        body: borrowBookData,
      }),
      invalidatesTags: ["borrow", "books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useBorrowSummaryQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  useGetSingleBookQuery,
  useEditBookMutation,
  useBorrowBookMutation,
} = baseApi;
