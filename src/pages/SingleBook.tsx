import { LoadingSpinner } from "@/components/common/LoadingSpinner";
import { useGetSingleBookQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router";

export const SingleBook = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleBookQuery(id);
  // console.log(id);

  if (isLoading) return <LoadingSpinner />;
  const book = data.data;

  if (isError) return <p>Error.....</p>;

  // console.log(data);

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden my-12 border border-gray-300">
      {/* <Helmet> */}
      {/* <title>Library Management System || {book?.title}</title> */}
      {/* </Helmet> */}

      {/* Header */}
      <div className="bg-blue-600 px-6 py-4">
        <h1 className="text-white text-2xl font-semibold">{book.title}</h1>
        <p className="text-blue-200 mt-1 italic">by {book.author}</p>
      </div>

      {/* Content */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-gray-800">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Genre
            </h3>
            <p className="text-lg font-semibold">{book.genre}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              ISBN
            </h3>
            <p className="text-lg font-semibold">{book.isbn}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Copies Available
            </h3>
            <p className="text-lg font-semibold">{book.copies}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Availability
            </h3>
            <p
              className={`text-lg font-semibold ${
                book.available ? "text-green-600" : "text-red-600"
              }`}
            >
              {book.available ? "Available" : "Not Available"}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
            Description
          </h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap min-h-[150px]">
            {book.description || "No description provided."}
          </p>
        </div>
      </div>
    </div>
  );
};
