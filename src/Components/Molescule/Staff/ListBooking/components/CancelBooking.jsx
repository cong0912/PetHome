// import { Button } from "Components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "Components/ui/dialog";
// import { Input } from "Components/ui/input";
// import { Label } from "Components/ui/label";
// import { X } from "lucide-react";
// import { useState } from "react";
// export function CancelBooking() {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <button className="flex items-center justify-center">
//           <X className="mr-2 h-4 w-4 text-red-600" />
//           <span>Hủy</span>
//         </button>
//       </DialogTrigger>

//       <DialogContent className="sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle>Lí do hủy</DialogTitle>
//           <DialogDescription>Vui lòng nhập lí do hủy tại đây</DialogDescription>
//         </DialogHeader>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="name" className="text-right">
//               Lí do:
//             </Label>
//             <Input id="name" className="col-span-3" />
//           </div>
//         </div>
//         <DialogFooter>
//           <Button type="submit">Xác nhận hủy</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }
import React, { useState } from "react";
import { X } from "lucide-react";
const CancelBooking = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState("");

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  const handleSubmit = () => {
    console.log("Cancellation reason:", reason);
    closeDialog();
  };

  return (
    <div className="font-mainText3">
      <button className="flex items-center justify-center" onClick={openDialog}>
        <X className="mr-2 h-4 w-4 text-red-600" />
        <span>Hủy</span>
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="mb-4 text-lg font-semibold text-cyan-600">
              Enter Cancellation Reason
            </h2>
            <textarea
              className="w-full p-2 mb-4 border rounded border-cyan-600 focus:outline-none focus:border-cyan-500"
              rows="4"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Type your reason here..."
            ></textarea>
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 font-bold text-white bg-cyan-500 rounded hover:bg-cyan-700"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-700"
                onClick={closeDialog}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CancelBooking;
