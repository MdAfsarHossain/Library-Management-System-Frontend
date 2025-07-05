import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { BookList } from "@/components/module/BookList";
import { useGetBooksQuery } from "@/redux/api/baseApi";

export const AllBooks = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);

  if (isLoading) return <LoadingSpinner />;
  const books = data?.data;

  return (
    <div className="px-4 min-h-screen md:px-12 lg:px-20 py-10 bg-gray-100 mb-16">
      {/* <Helmet> */}
      {/* <title>Library Management System || All Books</title> */}
      {/* </Helmet> */}
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-500 uppercase mb-2">
            All Books
          </h1>
          <p className="text-gray-600 text-lg">
            Explore our full collection of available books
          </p>
        </div>

        {/* Book List Grid */}
        <BookList books={books} />
      </div>
    </div>
  );
};
