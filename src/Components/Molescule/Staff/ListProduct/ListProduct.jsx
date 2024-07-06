import { DataTableProducts } from "./components/Data-table-products";
import { useState, useEffect } from "react";
import Loading from "Components/ui/loading";
import { getAllOrder, confirmOrder, cancelOrder } from "lib/api/order-api";

export default function ListProduct() {
  const [products, setProducts] = useState([]);
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
        setProducts(data2);
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
        Danh sách sản phẩm
      </h1>
      {loading ? <Loading /> : <DataTableProducts res={products} />}
    </div>
  );
}
