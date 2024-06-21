import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "stt", headerName: "Stt", width: 70 },
  { field: "idOrder", headerName: "ID đơn hàng", width: 130 },
  { field: "product", headerName: "Sản phẩm", width: 300 },
  {
    field: "total",
    headerName: "Tổng giá",
    type: "number",
    width: 90,
  },
  {
    field: "status",
    headerName: "status",
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    width: 160,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  return (
    <div>
      <h1 className="font-semibold text-2xl pb-4">Danh sách đơn hàng</h1>
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
          }}
        />
      </div>
    </div>
  );
}
