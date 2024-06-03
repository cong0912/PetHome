import axios from "axios";
import { handleApiError } from "./user-api";
export const registerUser = async (params) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/v1/auth/register",
      {
        name: params.username,
        phone: params.phone,
        email: params.email,
        password: params.password,
        dob: params.dob,
        sex: params.sex,
      }
    );

    return { error: null, data };
  } catch (error) {
    console.log(error);
    if (error.code == "ERR_NETWORK") {
      return { error: "BE Server is not running" };
    }
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
