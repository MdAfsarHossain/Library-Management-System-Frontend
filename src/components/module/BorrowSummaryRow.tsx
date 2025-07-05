interface BorrowSummaryRowProps {
  book: {
    totalQuantity: number;
    book: {
      title: string;
      isbn: string | number;
    };
  };
  index: number;
}

export const BorrowSummaryRow = ({ book, index }: BorrowSummaryRowProps) => {
  return (
    <tr
      className={`border-t ${
        index % 2 === 0 ? "bg-white" : "bg-gray-100"
      } hover:bg-gray-200 transition`}
    >
      <td className="px-6 py-3 font-medium text-blue-900">{book.book.title}</td>
      <td className="px-6 py-3">{book.book.isbn}</td>
      <td className="px-6 py-3">{book.totalQuantity}</td>
    </tr>
  );
};
