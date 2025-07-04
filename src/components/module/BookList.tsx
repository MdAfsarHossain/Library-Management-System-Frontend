import { BookTableRow } from "./BookTableRow";

// Define Book type
interface BookListType {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  description?: string;
  available: boolean;
}

// Type the props
interface BookListProps {
  books: BookListType[];
}

export const BookList = ({ books }: BookListProps) => {
  return (
    <div className="overflow-x-auto px-4 md:px-10 py-8 bg-gray-50 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">
        Book Inventory
      </h2>
      <table className="min-w-full table-auto text-sm text-left text-gray-700 border">
        <thead className="bg-blue-100 text-blue-800 uppercase text-xs">
          <tr>
            <th className="px-6 py-4 font-semibold">Title</th>
            <th className="px-6 py-4 font-semibold">Author</th>
            <th className="px-6 py-4 font-semibold">Genre</th>
            <th className="px-6 py-4 font-semibold">ISBN</th>
            <th className="px-6 py-4 font-semibold">Copies</th>
            <th className="px-6 py-4 font-semibold">Availability</th>
            <th className="px-6 py-4 font-semibold text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books?.map((book, index) => (
            <BookTableRow book={book} index={index} key={book._id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
