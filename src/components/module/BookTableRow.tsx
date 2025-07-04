import { useDeleteBookMutation } from "@/redux/api/baseApi";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";
import { BorrowBook } from "./BorrowBook";

interface Book {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  description?: string;
  available: boolean;
  // Add more fields as needed
}

interface BookTableRowProps {
  book: Book;
  index: number;
}

export const BookTableRow = ({ book, index }: BookTableRowProps) => {
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();

  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showBorrowModal, setShowBorrowModal] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState("");
  // const [quantity, setQuantity] = useState<number>(1);
  // const [dueDate, setDueDate] = useState<string>("");

  const openModal = (id: string) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (deleteId) handleDeleteBook(deleteId);
    setShowModal(false);
    setDeleteId(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
    setDeleteId(null);
  };

  // Handle Delete Book
  const handleDeleteBook = async (bookId: string) => {
    try {
      await deleteBook(bookId);
      toast("Book Deleted Successfully");
    } catch (error) {
      console.log(error);
      toast("Book Not Deleted.");
    }
  };

  // Handle Edit Book
  const handleEditBook = async (bookId: string) => {
    navigate(`/edit-book/${bookId}`);
    // try {
    //   const editBookData = {
    //     bookId,
    //     copies: 1500,
    //   };
    //   await editBook(editBookData);
    //   toast("Book updated successfully");
    // } catch (error) {
    //   console.error(error);
    //   toast("Book Not Updated!");
    // }
  };

  // Handle Borrow Book
  // const handleBorrow = async (
  //   selectedBookId: string,
  //   quantity: number,
  //   dueDate: string
  // ) => {
  //   try {
  //     if (book.copies < quantity) {
  //       toast("Not enough copies available!");
  //       return;
  //     }

  //     const borrowBookData = {
  //       book: selectedBookId,
  //       quantity: quantity,
  //       dueDate: dueDate,
  //     };

  //     // console.log(bookId, borrowBook);
  //     await borrowBook(borrowBookData);
  //     //   console.log(res);
  //     //   if (res?.data?.success) {
  //     toast("Book Borrowed Successfully.");
  //     navigate("/borrow-summary");
  //     //   }
  //     // else {
  //     //   toast()
  //     // }
  //   } catch (error) {
  //     console.error(error);
  //     toast("Book Not Borrowed");
  //   }
  // };

  // Handle Open Borrow Modal
  const openBorrowModal = (bookId: string) => {
    if (book?.copies < 1) {
      toast("Books are not available.");
      return;
    }

    setSelectedBookId(bookId);
    // setQuantity(1);
    // setDueDate("");
    setShowBorrowModal(true);
  };

  return (
    <>
      <tr
        className={`border-t ${
          index % 2 === 0 ? "bg-white" : "bg-gray-100"
        } hover:bg-gray-200 transition`}
      >
        <td className="px-6 py-3 font-medium text-blue-900">
          <Link to={`/books/${book._id}`} className="hover:underline">
            {book.title}
          </Link>
        </td>
        <td className="px-6 py-3">{book.author}</td>
        <td className="px-6 py-3">{book.genre}</td>
        <td className="px-6 py-3">{book.isbn}</td>
        <td className="px-6 py-3">{book.copies}</td>
        <td className="px-6 py-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-semibold ${
              book.available
                ? "bg-green-200 text-green-700"
                : "bg-red-200 text-red-700"
            }`}
          >
            {book.available ? "Available" : "Unavailable"}
          </span>
        </td>
        <td className="px-6 py-3">
          <div className="flex justify-center space-x-2">
            <button
              // onClick={() => handleDeleteBook(book._id)}
              onClick={() => openModal(book._id)}
              className="px-3 py-1 text-xs font-medium text-white bg-red-500 rounded hover:bg-red-600"
            >
              Delete
            </button>
            <button
              onClick={() => handleEditBook(book._id)}
              className="px-3 py-1 text-xs font-medium text-white bg-yellow-500 rounded hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              // onClick={() => handleBorrow(book._id)}

              onClick={() => openBorrowModal(book._id)}
              className="px-3 py-1 text-xs font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Borrow
            </button>
          </div>
        </td>
      </tr>

      {/* Delete Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-lg text-center">
            <h3 className="text-lg font-semibold text-red-600 mb-4">
              Confirm Deletion
            </h3>
            <p className="text-sm text-gray-700 mb-6">
              Are you sure you want to delete this book? This action cannot be
              undone.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Yes, Delete
              </button>
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* End of Delete confimation modal */}

      {/* Borrow Book Modal */}
      {showBorrowModal && (
        <BorrowBook
          showBorrowModal={showBorrowModal}
          setShowBorrowModal={setShowBorrowModal}
          selectedBookId={selectedBookId}
        />
      )}
      {/* End of Borrow Book Modal */}
    </>
  );
};
