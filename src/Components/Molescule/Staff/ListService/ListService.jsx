import { DataGrid } from "@mui/x-data-grid";
import styles from "./ListService.module.scss";
import MyAxios from "setup/configAxios";
import { useEffect, useRef, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "Components/Atom/Modal/Modal";
import { toast } from "react-toastify";
import Moreicon from "Components/Atom/MoreIcon/MoreIcon";
const ListService = () => {
  const [rows, setRows] = useState([]);
  const [deleteShow, setDeleteShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const dataGridStyle = {
    fontSize: "10px", // Thay đổi kích thước font ở đây
  };

  const [addshow, setAddShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    des: "",
    price: "",
  });
  const [productDetails, setProductDetails] = useState({
    name: "",
    des: "",
    price: "",
    quantity: "1",
  });
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const handleAddShow = () => {
    setAddShow(true);
  };
  const handleAddClose = () => {
    setAddShow(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };
  const handleEditShow = async (id) => {
    setSelectedProductId(id);
    try {
      const response = await MyAxios.get(`http://localhost:5000/api/v1/products/${id}`);
      const { name, des, price, quantity } = response.data;
      setProductDetails({
        name,
        des,
        price,
        quantity,
      });
      setEditShow(true);
    } catch (error) {
      console.error("Error fetching product details:", error);
      // Handle error fetching product details
    }
  };
  const handleEditClose = () => {
    setEditShow(false);
    setProductDetails({
      name: "",
      des: "",
      price: "",
      quantity: "1",
    });
  };
  const handleUpdateProduct = async () => {
    const { name, des, price, quantity } = productDetails;
    const updatedData = {
      name,
      des,
      price,
      quantity,
      productId: selectedProductId,
    };
    try {
      await MyAxios.put(`http://localhost:5000/api/v1/products`, updatedData);
      toast.success(`Đã cập nhật sản phẩm`, {});
      const updatedProductList = await MyAxios.get(
        `http://localhost:5000/api/v1/products?type=service&name=spa&species=both`
      );
      setRows(updatedProductList.data);
      setEditShow(false);
      setSelectedProductId(null);
    } catch (error) {
      console.error("There was an error updating the product!", error);
    }
  };

  const handleDeleteShow = (id) => {
    setSelectedProductId(id);
    setDeleteShow(true);
  };
  const handleDeleteClose = () => {
    setDeleteShow(false);
  };
  useEffect(() => {
    //goi api
    MyAxios.get(`http://localhost:5000/api/v1/products?type=service&name=spa&species=both`).then((res) => {
      setRows(res.data);
    });
  }, []);
  console.log(rows);
  const handleDelete = async () => {
    try {
      await MyAxios.post(`http://localhost:5000/api/v1/products/disable`, { productId: selectedProductId });
      toast.success(` Đã xóa dịch vụ thành công `, {});
      const updatedProductList = await MyAxios.get(
        `http://localhost:5000/api/v1/products?type=service&name=spa&species=both`
      );
      setRows(updatedProductList.data);
      setDeleteShow(false);
      setSelectedProductId(null);
    } catch (error) {
      console.error("There was an error deleting the data!", error);
    }
  };

  const handleUnDelete = async (productId) => {
    try {
      await MyAxios.post(`http://localhost:5000/api/v1/products/unDisable`, { productId });
      toast.success(` Đã hủy xóa dịch vụ `, {});
      const updatedProductList = await MyAxios.get(
        `http://localhost:5000/api/v1/products?type=service&name=spa&species=both`
      );
      setRows(updatedProductList.data);
      setSelectedProductId(null);
    } catch (error) {
      console.error("There was an error deleting the data!", error);
    }
  };
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 210,
      renderCell: (params) => {
        return <div className={styles["id"]}>{params.row._id}</div>;
      },
    },
    {
      field: "name",
      headerName: "Sản phẩm",
      width: 480,
      renderCell: (params) => {
        return <div className={styles["name"]}>{params.row.name}</div>;
      },
    },
    {
      field: "image",
      headerName: "Ảnh",
      width: 120,
      renderCell: (params) => {
        return <img src={params.row.image} alt="" />;
      },
    },
    {
      field: "price",
      headerName: "Giá",
      width: 100,
      renderCell: (params) => {
        return <div className={styles["price"]}>{params.row.price}đ</div>;
      },
    },
    {
      field: "quantity",
      headerName: "Số lượng",
      width: 80,
      renderCell: (params) => {
        return <div className={styles["name"]}>{params.row.quantity}</div>;
      },
    },

    {
      field: "status",
      headerName: "Trạng thái",
      width: 100,
      renderCell: (params) => {
        return <div className={styles["status"]}>{params.row.status}</div>;
      },
    },
    {
      field: "",
      headerName: "Action",
      width: 80,
      renderCell: (params) => {
        return (
          <Moreicon
            handleEdit={() => handleEditShow(params.row._id)}
            handleDelete={() => handleDeleteShow(params.row._id)}
            handleUnDelete={() => handleUnDelete(params.row._id)}
          />
        );
      },
    },
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("des", formData.des);
    data.append("price", formData.price);

    if (file) {
      data.append("file", file);
    }

    try {
      const response = await MyAxios.post("http://localhost:5000/api/v1/products/addService", data);
      toast.success(` Đã thêm dịch vụ `, {});
      console.log(response.data);
      setAddShow(false);
      setFormData({
        name: "",
        des: "",
        price: "",
      });
      setFile(null);
      const updatedServiceList = await MyAxios.get(
        `http://localhost:5000/api/v1/products?type=service&name=spa&species=both`
      );
      setRows(updatedServiceList.data);
    } catch (error) {
      console.error("There was an error uploading the data!", error);
    }
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>
        <div className={styles["title-name"]}>Danh sách dịch vụ</div>
        <button className={styles["add-btn"]} onClick={handleAddShow}>
          Thêm dịch vụ
        </button>
      </div>
      <div className={styles["data"]}>
        <div className={styles["data-grid-container"]}>
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(row) => row._id} // Specify the custom id field
            style={{ fontSize: "1rem" }}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 15]}
            checkboxSelection
            rowHeight={120}
          />
        </div>
      </div>
      <Modal show={addshow} onHide={handleAddClose} size={"sm"}>
        <ModalHeader content={"Thêm sản phẩm"} />
        <div className={styles["add-modal-frame"]}>
          <div className={styles["add-modal-container"]}>
            <ModalBody>
              <form className={styles["contact-form"]} onSubmit={handleSubmit}>
                <div className={styles["form-group"]}>
                  <label htmlFor="name">
                    Tên <span className={styles["required"]}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="price">
                    Giá <span className={styles["required"]}>*</span>
                  </label>
                  <input type="text" id="price" name="price" value={formData.price} onChange={handleInputChange} />
                </div>

                <div className={styles["form-group"]}>
                  <label htmlFor="des">
                    Mô tả <span className={styles["required"]}>*</span>
                  </label>
                  <textarea
                    type="text"
                    id="des"
                    name="des"
                    value={formData.des}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="file">
                    Ảnh <span className={styles["required"]}>*</span>
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    accept="image/png, image/jpeg"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                  />
                  <div className={styles["file"]}>
                    <button type="button" onClick={handleFileUpload} className={styles["btn-file"]}>
                      Chọn file ảnh
                    </button>
                    {file && <span className={styles["file-text"]}>{file.name}</span>}
                  </div>
                </div>
                <div className={styles["submit"]}>
                  <button type="submit" className={styles["submit-btn"]}>
                    Thêm
                  </button>
                </div>
              </form>
            </ModalBody>
          </div>
        </div>
      </Modal>
      <Modal show={deleteShow} onHide={handleDeleteClose} size={"sm"}>
        <ModalHeader content={"Xác nhận xóa"} />
        <div className={styles["delete-modal-frame"]}>
          <div className={styles["delete-modal-title"]}>
            <ModalBody>Bạn có chắc chắn muốn xóa sản phẩm này không?</ModalBody>
          </div>
          <div className={styles["delete-modal-btn"]}>
            <ModalFooter>
              <button className={styles["delete-btn"]} onClick={handleDelete}>
                Xóa
              </button>
              <button className={styles["cancel-btn"]} onClick={handleDeleteClose}>
                Hủy
              </button>
            </ModalFooter>
          </div>
        </div>
      </Modal>

      <Modal show={editShow} onHide={handleEditClose} size={"sm"}>
        <ModalHeader content={"Sửa sản phẩm"} />
        <div className={styles["add-modal-frame"]}>
          <div className={styles["add-modal-container"]}>
            <ModalBody>
              <form className={styles["contact-form"]} onSubmit={handleUpdateProduct}>
                <div className={styles["form-group"]}>
                  <label htmlFor="name">
                    Tên <span className={styles["required"]}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={productDetails.name}
                    onChange={(e) => setProductDetails({ ...productDetails, name: e.target.value })}
                    required
                  />
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="price">
                    Giá <span className={styles["required"]}>*</span>
                  </label>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={productDetails.price}
                    onChange={(e) => setProductDetails({ ...productDetails, price: e.target.value })}
                    required
                  />
                </div>
                <div className={styles["form-group"]}>
                  <label htmlFor="des">
                    Mô tả <span className={styles["required"]}>*</span>
                  </label>
                  <textarea
                    type="text"
                    id="des"
                    name="des"
                    value={productDetails.des}
                    onChange={(e) => setProductDetails({ ...productDetails, des: e.target.value })}
                    required
                  />
                </div>
                <div className={styles["submit"]}>
                  <button type="submit" className={styles["submit-btn"]}>
                    Cập nhật
                  </button>
                </div>
              </form>
            </ModalBody>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default ListService;
