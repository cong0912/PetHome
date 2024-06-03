import axios from "axios";
export const handleApiError = (error) => {
  try {
    const errorMessage =
      error.response?.data || "An unexpected error occurred.";
    const data = null;
    return { error: errorMessage, data };
  } catch (err) {
    throw new Error("An unexpected error occurred.");
  }
};

export const verifyApi = async (params) => {
  try {
    const { data } = await axios.post(`https://your-api-url.com/verify-otp`, {
      ...params,
    });
    return { error: null, data };
  } catch (error) {
    const code = error.response.status;

    if (code == 403) {
      error.response.data = "You do not have permission";
    } else if (code == 500) {
      error.response.data = "Server have problems";
    } else if (code == 400) {
      error.response.data = "Bad request";
    }

    return handleApiError(error);
  }
};
