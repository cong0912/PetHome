import axiosClient from "setup/configAxios";
const getAllOder = async () => {
  try {
    const response = await axiosClient.get(`api/v1/orders?status=Processing`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export { getAllOder };
