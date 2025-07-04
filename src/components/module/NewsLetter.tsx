import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const NewsLetter = () => {
  return (
    <div className="bg-blue-600">
      <div className="container mx-auto text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl uppercase font-bold mb-4">
          Stay Updated
        </h2>
        <p className="mb-6">
          Subscribe to get updates about new arrivals and features.
        </p>
        <form className="max-w-md mx-auto flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            className="text-black bg-white"
          />
          <Button
            type="submit"
            className="bg-white text-blue-600 hover:bg-gray-200"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};
