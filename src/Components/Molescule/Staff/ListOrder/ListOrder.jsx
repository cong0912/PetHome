// import React, { useEffect, useState } from "react";
// import DataTable from "../components/data-table";
// import { getAllOrder } from "lib/api/order-api";
// import { confirmOrder } from "lib/api/order-api";
// const handleConfirmOrder = (id) => {
//   confirmOrder(id.row.id);

// };

// const columns = [
//   { field: "id", headerName: "Stt", width: 100 },
//   { field: "idOrder", headerName: "ID đơn hàng", width: 150 },
//   { field: "product", headerName: "Sản phẩm", width: 300 },
//   {
//     field: "total",
//     headerName: "Tổng giá",
//     width: 130,
//   },
//   {
//     field: "status",
//     headerName: "Trạng thái",
//     width: 130,
//   },
//   {
//     field: "action",
//     headerName: "Thêm",
//     width: 130,
//     renderCell: (params) => (
//       <div className="" onClick={() => confirmOrder(params.row.id)}>
//         <button>ok</button>
//       </div>
//     ),
//   },
// ];

// export default function ListOrder() {
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [render, setRender] = useState("");
//   useEffect(() => {
//     const fetchListOrder = async () => {
//       try {
//         const data = await getAllOrder();

//         const transformedRows = data.map((order, index) => ({
//           id: index + 1,
//           idOrder: order._id,
//           product: order.orderDetails
//             .map((detail) => detail.product.name)
//             .join(", "),
//           total: order.totalPrice,
//           status: order.status,
//           action: "View/Edit",
//         }));
//         setRows(transformedRows);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchListOrder();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <h1 className="font-semibold text-2xl pb-4">Danh sách đơn hàng</h1>
//       <DataTable rows={rows} columns={columns} />
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import DataTable from "../components/data-table";
import { getAllOrder, confirmOrder, cancelOrder } from "lib/api/order-api";

const ListOrder = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reRender, setReRender] = useState(false);

  useEffect(() => {
    const fetchListOrder = async () => {
      try {
        const data = await getAllOrder();
        const transformedRows = data.map((order, index) => ({
          id: index + 1,
          idOrder: order._id,
          product: order.orderDetails
            .map((detail) => detail.product.name)
            .join(", "),
          total: order.totalPrice,
          status: order.status,
          action: "",
          image: order.orderDetails.map((detail) => detail.product.image),
        }));
        setRows(transformedRows);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListOrder();
  }, [reRender]);

  const handleConfirmOrder = async (params) => {
    try {
      console.log("Params received for confirmation:", params);
      await confirmOrder(params.row.idOrder);
      console.log("Order confirmed:", params.row.idOrder);
      setReRender(!reRender);
    } catch (error) {
      console.error("Error confirming order:", error);
    }
  };
  const handleCancelOrder = async (orderId) => {
    try {
      await cancelOrder(orderId);
      setReRender(!reRender);
    } catch (error) {
      console.error("Error canceling order:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const columns = [
    { field: "id", headerName: "Stt", width: 80 },
    { field: "idOrder", headerName: "ID đơn hàng", width: 220 },
    {
      field: "product",
      headerName: "Sản phẩm",
      width: 300,
      renderCell: (params) => (
        <div className="flex gap-2">
          <img src={params.row.image} alt="err" width={50} />
        </div>
      ),
    },
    { field: "total", headerName: "Tổng giá", width: 130 },
    { field: "status", headerName: "Trạng thái", width: 130 },
    {
      field: "action",
      headerName: "Hành động",
      width: 200,
      renderCell: (params) => (
        <div className="flex gap-2">
          <button onClick={() => handleConfirmOrder(params)}>Confirm</button>
          <button onClick={() => handleCancelOrder(params.row.idOrder)}>
            Cancel
          </button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <h1 className="font-semibold text-2xl pb-4">Danh sách đơn hàng</h1>
      <DataTable rows={rows} columns={columns} />
    </div>
  );
};

export default ListOrder;
