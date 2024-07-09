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
import { Input } from "Components/ui/input";
import { Label } from "Components/ui/label";
import { X } from "lucide-react";
import { useState } from "react";
import { cancelBooking } from "lib/api/cage-api";
import { toast } from "react-toastify";
export function CancelBooking({ bookingId }) {
  const [reason, setReason] = useState("");
  const handleSubmit = async () => {
    try {
      const response = await cancelBooking(bookingId, reason);
      if (response.status === "error") {
        toast.error(`Error: ${response.message}`, {
          position: "top-left",
        });
      } else {
        toast.success(`Confirm success: ${response.message}`, {
          position: "top-right",
        });
      }
      console.log(response);
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: "top-left",
      });
      console.error("Error confirming cage:", error);
    }
    console.log("Cancellation reason:", reason);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center">
          <X className="mr-2 h-4 w-4 text-red-600" />
          <span>Hủy</span>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-red-500">Lí do hủy</DialogTitle>
          <DialogDescription>Vui lòng nhập lí do hủy tại đây</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Lí do:
            </Label>
            <Input
              id="name"
              className="col-span-3"
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleSubmit}
            className="bg-red-500 hover:bg-red-900"
            type="submit"
          >
            Xác nhận hủy
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}