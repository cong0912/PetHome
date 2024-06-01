import Register from "../pages/Auth/Register/index";
import Test from "../Components/test";
import DefaultLayout from "../Components/layout/DefaultLayout";
// const role = localStorage.getItem("role");
const publicRoute = [
  { path: "/register", component: Register, layout: null },
  { path: "/test", component: Test, layout: DefaultLayout },
];

const privateRoute = [];
export { publicRoute, privateRoute };
