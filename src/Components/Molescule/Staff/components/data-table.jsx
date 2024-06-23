import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({ rows, columns }) => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          sx={{
            "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
              background: "#222a63 !important",
              color: "white",
            },
            "& .MuiButtonBase-root": {
              color: "white",
            },
            "& .MuiDataGrid-row": {
              minHeight: "52px",
            },
          }}
        />
      </div>
    </div>
  );
};

export default DataTable;

// import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";

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
//     headerName: "Status",
//     width: 130,
//   },
//   {
//     field: "action",
//     headerName: "Action",
//     width: 130,
//   },
// ];

// const rows = [
//   {
//     id: 1,
//     idOrder: "Snow",
//     product: "Jon",
//     total: 35,
//     status: "prossing",
//     action: "",
//   },
// ];

// export default function DataTable() {
//   return (
//     <div>
//       <div style={{ height: 400, width: "100%" }}>
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           initialState={{
//             pagination: {
//               paginationModel: { page: 0, pageSize: 5 },
//             },
//           }}
//           pageSizeOptions={[5, 10]}
//           sx={{
//             "& .css-yrdy0g-MuiDataGrid-columnHeaderRow": {
//               background: "#222a63 !important",
//               color: "white",
//             },
//             "& .MuiButtonBase-root": {
//               color: "white",
//             },
//           }}
//         />
//       </div>
//     </div>
//   );
// }
