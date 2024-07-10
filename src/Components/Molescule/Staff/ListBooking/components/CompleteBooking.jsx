import { Button } from "Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "Components/ui/dialog";
import { CheckCheck } from "lucide-react";
import { useState } from "react";
import { completeBooking } from "lib/api/cage-api";
import { toast } from "react-toastify";
export function CompleteBooking({ bookingId }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await completeBooking(bookingId);
      if (response.status === "error") {
        toast.error(`Error: ${response.message}`, {
          position: "top-left",
        });
        setIsOpen(true);
      } else {
        toast.success(`Confirm success: ${response.message}`, {
          position: "top-right",
        });
        setIsOpen(false);
      }
      console.log(response);
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: "top-left",
      });
      setIsOpen(true);
      console.error("Error confirming cage:", error);
    }
    setIsLoading(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center">
          <CheckCheck className="mr-2 h-4 w-4 text-green-600" />
          <span>Xác nhận</span>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-green-500">Hoàn thành</DialogTitle>
          <DialogDescription>Xác nhận hoàn thành</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-900"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Xác nhận "}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
