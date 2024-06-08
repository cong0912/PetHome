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
