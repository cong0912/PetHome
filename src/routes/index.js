import Register from "../pages/Auth/Register/index";
import Test from "../Components/test";
import DefaultLayout from "../Components/layout/DefaultLayout";
import LoginForm from "../Components/Molescule/LoginForm/LoginForm";
// const role = localStorage.getItem("role");
const publicRoute = [
  { path: "/register", component: Register, layout: null },
  { path: "/test", component: Test, layout: DefaultLayout },
  { path: "/login", component: LoginForm, layout: null },
];

const privateRoute = [];
export { publicRoute, privateRoute };
