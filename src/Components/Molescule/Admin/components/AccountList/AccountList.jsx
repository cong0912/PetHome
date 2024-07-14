import React, { useState } from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, TextField } from '@mui/material';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const initialRows = [
  { id: "1", email: 'john@example.com', fullName: 'John Doe', role: 'Admin', disabled: false },
  { id: "2", email: 'jane@example.com', fullName: 'Jane Doe', role: 'User', disabled: false },
];

const AccountList = () => {
  const [rows, setRows] = useState(initialRows);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);

  const handleStatusChange = (row) => {
    setSelectedRow(row);  
    setOpen(true);
  };  

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const handleConfirmStatusChange = () => {
    setRows(rows.map((row) => 
      (row.id === selectedRow.id ? { ...row, disabled: !row.disabled } : row)
    ));
    handleClose();
  };

  const handleSelectionModelChange = (selection) => {
    console.log('Selected rows:', selection);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'fullName', headerName: 'Full Name', width: 200 },
    { field: 'role', headerName: 'Role', width: 150 },
    {
      field: 'disabled',
      headerName: 'Status',
      width: 150,
      renderCell: (params) => (params.value ? 'Disabled' : 'Active')
    },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      width: 150,
      getActions: (params) => [
        <GridActionsCellItem
          icon={params.row.disabled ? <CheckCircleIcon /> : <BlockIcon />}
          label={params.row.disabled ? "Enable" : "Disable"}
          onClick={() => handleStatusChange(params.row)}
        />,
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Quản lý tài khoản</h1>
        <div className=" p-4 rounded-md shadow-md">
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              onSelectionModelChange={handleSelectionModelChange}
              sx={{ backgroundColor: 'inherit' }}
            />
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedRow?.disabled ? 'Enable Account' : 'Disable Account'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bạn có muốn  {selectedRow?.disabled ? 'enable' : 'disable'} tài khoản này?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button> 
          <Button onClick={handleConfirmStatusChange} color="primary">
            {selectedRow?.disabled ? 'Enable' : 'Disable'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AccountList;
