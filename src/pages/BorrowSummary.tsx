import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { useBorrowSummaryQuery } from "@/redux/api/baseApi";

interface Book {
  totalQuantity: number;
  book: {
    title: string;
    isbn: number | string;
  };
  // Add other fields as needed
}

export const BorrowSummary = () => {
  const { data, isLoading } = useBorrowSummaryQuery(undefined);
  // Type assertion
  const books = data?.data as Book[];

  // console.log(data, isLoading);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="p-6 md:p-10 bg-gray-100 min-h-screen">
      {/* <Helmet> */}
      {/* <title>Library Management System || Borrow Summary</title> */}
      {/* </Helmet> */}
      <div className="container mx-auto">
        <h1 className=" font-bold text-center text-blue-500 uppercase text-4xl md:text-5xl mb-8">
          Borrow Summary
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books?.map((book, ind) => (
            <div
              key={ind}
              className="bg-white rounded-lg shadow-md p-5 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-500">
                  Quantity
                </span>
                <span className="text-lg font-semibold text-green-600">
                  {book.totalQuantity}
                </span>
              </div>

              <h2 className="text-xl font-bold text-gray-800 mb-1">
                {book.book.title}
              </h2>

              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">ISBN:</span>{" "}
                {book.book.isbn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
