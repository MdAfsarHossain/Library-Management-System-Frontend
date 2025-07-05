import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { BorrowSummaryRow } from "@/components/module/BorrowSummaryRow";
import { useBorrowSummaryQuery } from "@/redux/api/baseApi";

interface Book {
  totalQuantity: number;
  book: {
    title: string;
    isbn: number | string;
  };
}

export const BorrowSummary = () => {
  const { data, isLoading } = useBorrowSummaryQuery(undefined);
  const books = data?.data as Book[];

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-8 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-blue-500 font-bold text-3xl sm:text-4xl md:text-5xl uppercase mb-8">
          Borrow Summary
        </h1>

        <div className="overflow-x-auto shadow-md rounded-lg bg-white">
          <table className="w-full table-auto text-sm sm:text-base text-left text-gray-700">
            <thead className="bg-blue-100 text-blue-800 uppercase text-xs sm:text-sm">
              <tr>
                <th className="px-4 sm:px-6 py-4 font-semibold">Title</th>
                <th className="px-4 sm:px-6 py-4 font-semibold">ISBN</th>
                <th className="px-4 sm:px-6 py-4 font-semibold">
                  Total Quantity
                </th>
              </tr>
            </thead>
            <tbody>
              {books && books.length > 0 ? (
                books.map((book, index) => (
                  <BorrowSummaryRow
                    book={book}
                    index={index}
                    key={book.book.isbn}
                  />
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center py-6 text-gray-500">
                    No borrow data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
