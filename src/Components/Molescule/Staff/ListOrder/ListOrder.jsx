import { DataTableOrder } from "./components/Data-table-order";
import { useState, useEffect } from "react";
import Loading from "Components/ui/loading";
import { getAllOrder } from "lib/api/order-api";

export default function ListProduct() {
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllOrderS = async () => {
      try {
        const data = await getAllOrder();
        const data2 = data.map((order, index) => ({
          id: index + 1,
          idOrder: order._id,
          product: order.orderDetails
            .map((detail) => detail.product.name)
            .join(`\n`),
          total: order.totalPrice,
          status: order.status,
          action: "",
          image: order.orderDetails.map((detail) => detail.product.image),
        }));
        setOrder(data2);
      } catch (error) {
        console.log("err", error);
      } finally {
        setLoading(false);
      }
    };
    getAllOrderS();
  }, []);

  return (
    <div>
      <h1 className="font-bold font-mainText3 text-xl pb-4">
        Danh sách đơn hàng
      </h1>
      {loading ? <Loading /> : <DataTableOrder res={order} />}
    </div>
  );
}
