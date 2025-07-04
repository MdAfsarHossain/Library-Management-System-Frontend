import { MainLayout } from "@/layouts/MainLayout";
import { AddBook } from "@/pages/AddBook";
import { AllBooks } from "@/pages/AllBooks";
import { BorrowSummary } from "@/pages/BorrowSummary";
import { EditBook } from "@/pages/EditBook";
import { ErrorPage } from "@/pages/ErrorPage";
import { HomePage } from "@/pages/HomePage";
import { SingleBook } from "@/pages/SingleBook";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "books",
        Component: AllBooks,
      },
      {
        path: "create-book",
        Component: AddBook,
      },
      {
        path: "books/:id",
        Component: SingleBook,
      },
      {
        path: "edit-book/:id",
        Component: EditBook,
      },
      // {
      //   path: 'borrow/:bookId',
      //   Component:
      // },
      {
        path: "borrow-summary",
        Component: BorrowSummary,
      },
      // {
      //   path: "borrow-book",
      //   Component: BorrowBook,
      // },
    ],
  },
]);

export default router;
