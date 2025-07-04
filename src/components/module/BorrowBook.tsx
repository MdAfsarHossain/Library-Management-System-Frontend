import { cn } from "@/lib/utils";
import {
  useBorrowBookMutation,
  useGetSingleBookQuery,
} from "@/redux/api/baseApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";
import { LoadingSpinner } from "../common/LoadingSpinner";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const formSchema = z.object({
  quantity: z.string(),
  dueDate: z.date(),
});

type BorrowBookProps = {
  showBorrowModal: boolean;
  setShowBorrowModal: (value: boolean) => void;
  selectedBookId: string; // or string | null if it can be null
};

export const BorrowBook = ({
  showBorrowModal,
  setShowBorrowModal,
  selectedBookId,
}: BorrowBookProps) => {
  const [borrowBook] = useBorrowBookMutation();
  const { data: book = [], isLoading } = useGetSingleBookQuery(selectedBookId);
  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  const navigate = useNavigate();

  if (isLoading) return <LoadingSpinner />;
  // console.log(book.data);

  const onSubmit: SubmitHandler<FieldValues> = async (formData) => {
    try {
      formData.quantity = parseInt(formData.quantity);
      // console.log(book?.data?.copies);
      // console.log(formData.quantity);
      if (book?.data?.copies < formData.qunatity) {
        toast("Not enough copies available!");
        return;
      }

      const localDate = new Date(formData.dueDate);
      const utcDate = new Date(
        Date.UTC(
          localDate.getFullYear(),
          localDate.getMonth(),
          localDate.getDate()
        )
      );
      const formatted = utcDate.toISOString();

      formData.dueDate = formatted;
      const borrowBookData = {
        book: selectedBookId,
        ...formData,
      };
      // console.log(borrowBookData);
      const res = await borrowBook(borrowBookData);
      // console.log(res);
      if (res?.data?.status) {
        toast("Book Borrowed Successfully.");
        navigate("/borrow-summary");
      } else {
        toast("Not enough copies available!");
      }
    } catch (error) {
      console.error(error);
      toast("Book Not Borrowed");
    } finally {
      setShowBorrowModal(false);
    }
  };

  return (
    <>
      <div className="">
        {/* <h1>BorrowBook</h1> */}
        {/* Button */}
        <Dialog open={showBorrowModal} onOpenChange={setShowBorrowModal}>
          <form>
            {/* <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger> */}
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Borrow Book</DialogTitle>
                <DialogDescription className="sr-only">
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form
                  action=""
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex flex-col gap-3"
                >
                  {/* Quantity */}
                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quantity</FormLabel>
                        <FormControl>
                          {/* Your form field */}
                          <Input
                            type="number"
                            {...field}
                            value={field.value || ""}
                            placeholder="Enter quantity here"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* Popover and Calendar */}
                  <FormField
                    control={form.control}
                    name="dueDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Due Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              // disabled={(date) =>
                              //   date > new Date() || date < new Date("1900-01-01")
                              // }
                              captionLayout="dropdown"
                            />
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    )}
                  />

                  {/* Footer */}
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Confirm</Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </>
  );
};
