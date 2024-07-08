import React from "react";
// import Card from "./components/Card";
import { DataTableBooking } from "./components/Data-table-booking";
import { useState, useEffect } from "react";
import { getAllBookingService } from "lib/api/services-api";
import Loading from "Components/ui/loading";
export default function ListBooking() {
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState();
  useEffect(() => {
    const getAllBooking = async () => {
      try {
        const data = await getAllBookingService();
        const data2 = data.map((order, index) => ({
          id: index + 1,
          idBooking: order._id,
          product: order.product.name,
          timeStartService: order.timeStartService,
          status: order.status,
          action: "",
        }));
        setBooking(data2);
      } catch (error) {
        console.log("err", error);
      } finally {
        setLoading(false);
      }
    };
    getAllBooking();
  }, []);
  return (
    <div>
      <h1 className="font-bold font-mainText3 text-xl pb-4">
        Danh sách đặt chổ
      </h1>
      {loading ? (
        <Loading />
      ) : booking && booking.length >= 1 ? (
        <DataTableBooking res={booking} />
      ) : (
        <p>không có đặt chỗ</p>
      )}
    </div>
  );
}
