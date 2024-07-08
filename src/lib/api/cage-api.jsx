import axiosClient from "setup/configAxios";
const getEmptyCage = async (id) => {
  try {
    const response = await axiosClient.post(`api/v1/cage/empty`, {
      bookingId: id,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
const confirmCage = async (bookingId, selectedCageId) => {
  try {
    const response = await axiosClient.post(`api/v1/service/confirm`, {
      bookingId: bookingId,
      cageId: selectedCageId,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
export { getEmptyCage, confirmCage };
