import axiosClient from "setup/configAxios";

export const getAllCombo = async () => {
  try {
    const response = await axiosClient.get(
      `api/v1/products?type=service&name=spa&species=both`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const AscendingSort = async () => {
  try {
    const response = await axiosClient.get(
      `api/v1/products/sort?type=service&name=spa&species=both&sort=asc`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const DescendingSort = async () => {
  try {
    const response = await axiosClient.get(
      `api/v1/products/sort?type=service&name=spa&species=both&sort=desc`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const DetailService = async (id) => {
  try {
    const response = await axiosClient.get(
      `http://localhost:5000/api/v1/products/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
