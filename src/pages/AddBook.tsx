import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateBookMutation } from "@/redux/api/baseApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  author: z.string().min(1, { message: "Author is required" }),
  genre: z.string().min(1, { message: "Genre is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  copies: z.coerce
    .number()
    .min(1, { message: "Copies must be a positive number" }),
  isbn: z.coerce.number().min(1, { message: "ISBN must be a valid number" }),
});

interface BookFormData {
  title: string;
  author: string;
  genre: string;
  description: string;
  isbn: number | string;
  copies: number;
  // Add any other fields you expect
}

export const AddBook = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const navigate = useNavigate();
  const [createBook, { isLoading }] = useCreateBookMutation();

  const onSubmit = async (formData: BookFormData) => {
    try {
      const newBook = {
        ...formData,
        isbn: formData?.isbn?.toString(),
        available: true,
      };
      const res = await createBook(newBook);

      if (res.data.success) {
        toast("Book Added Successfully.");
        navigate("/books");
      }
    } catch (error) {
      console.log(error);
      toast.error("Book not added.");
    }
  };

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-10 lg:px-20 min-h-screen">
      {/* <Helmet> */}
      {/* <title>Library Management System || Add Book</title> */}
      {/* </Helmet> */}

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h1 className="text-5xl uppercase font-bold text-center text-blue-500 mb-8">
          Add New Book
        </h1>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter book title"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Author */}
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Author</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter author's name"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Genre */}
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Genre</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue placeholder="Select genre" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="FICTION">Fiction</SelectItem>
                      <SelectItem value="NON_FICTION">Non Fiction</SelectItem>
                      <SelectItem value="SCIENCE">Science</SelectItem>
                      <SelectItem value="HISTORY">History</SelectItem>
                      <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                      <SelectItem value="FANTASY">Fantasy</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Brief description of the book"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ISBN */}
            <FormField
              control={form.control}
              name="isbn"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">ISBN</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter ISBN number"
                      {...field}
                      value={field.value || ""}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Copies */}
            <FormField
              control={form.control}
              name="copies"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Copies</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Number of available copies"
                      {...field}
                      value={field.value || ""}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="text-center pt-4">
              <Button
                disabled={isLoading}
                type="submit"
                className="px-6 py-2 text-white cursor-pointer bg-blue-600 hover:bg-blue-700 rounded-lg shadow"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </Form>
        {/* End of Form */}
      </div>
    </div>
  );
};
