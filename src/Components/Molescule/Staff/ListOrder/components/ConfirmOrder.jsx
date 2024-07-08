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
import { CheckCheck } from "lucide-react";
import { toast } from "react-toastify";
import { confirmOrder } from "lib/api/order-api";
export function ConfirmOrder({ orderId }) {
  const handleSubmit = async () => {
    try {
      const response = await confirmOrder(orderId);
      console.log("hehe", response);
      if (response.status === "success") {
        toast.success(`Confirm success: ${response.message}`, {
          position: "top-right",
        });
      } else {
        toast.error(`Error: ${response.message}`, {
          position: "top-left",
        });
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: "top-left",
      });
      console.error("Error confirming cage:", error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center justify-center">
          <CheckCheck className="mr-2 h-4 w-4 text-green-600" />
          <span>Xác nhận</span>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] font-mainText3 ">
        <DialogHeader>
          <DialogTitle className="text-green-500">
            Xác nhận đơn hàng
          </DialogTitle>
          <DialogDescription>
            Bạn có chắc chắn xác nhận đơn hàng ?
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-900"
            type="submit"
          >
            Xác nhận
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
