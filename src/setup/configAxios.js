import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: "https://pethome.onrender.com",
});
instance.defaults.withCredentials = true;
// Alter defaults after instance has been created
let access_token = localStorage.getItem("access_token");
if (access_token) {
  let token = [];
  token = access_token;
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
