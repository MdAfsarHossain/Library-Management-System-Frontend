import { Link } from "react-router";
import { Button } from "../ui/button";

export const Features = () => {
  return (
    <div className="bg-gray-100">
      <section className="py-14 md:py-28 px-6 container mx-auto ">
        <h2 className="text-3xl md:text-4xl uppercase text-blue-500 font-bold text-center mb-12">
          What You Can Do
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">📚 Manage Books</h3>
            <p>Add, edit, or delete books with full control and validations.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">🔍 View Book Details</h3>
            <p>
              Quickly find book information like title, author, genre, and
              availability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">📦 Borrow Books</h3>
            <p>
              Borrow with a form modal, quantity, and due date. Real-time
              availability update.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-center border-t border-gray-200">
        <h2 className="text-3xl md:text-5xl text-blue-500 uppercase font-bold mb-4">
          Ready to Explore?
        </h2>
        <p className="text-gray-600 mb-6">
          Head over to the book collection and start managing today.
        </p>
        <Link to="/books">
          <Button className="text-white bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
        </Link>
      </section>
    </div>
  );
};
