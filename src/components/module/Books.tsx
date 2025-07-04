import { useGetBooksQuery } from "@/redux/api/baseApi";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { BookList } from "./BookList";

export const Books = () => {
  const { data, isLoading } = useGetBooksQuery(undefined);

  if (isLoading) return <LoadingSpinner />;

  const books = data.data;
  // console.log(books);
  return (
    <div className="mb-16 container mx-auto">
      <div className="text-center mt-10 mb-5">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-500 uppercase mb-2">
          All Books
        </h1>
      </div>
      {/* <BookList books={books || []} /> */}
      <BookList books={books} />
    </div>
  );
};
