import DefaultLayout from "components/layout/DefaultLayout";
import LoginForm from "components/Molescule/LoginForm/LoginForm";
import VerifiOTP from "components/Molescule/VerifyOtp";
import Register from "components/Molescule/RegisterForm/index.jsx";
import GioiThieu from "components/Molescule/GioiThieu/GioiThieu";

// const role = localStorage.getItem("role");
const publicRoute = [
  { path: "/register", component: Register, layout: null },
  { path: "/", component: GioiThieu, layout: DefaultLayout },
  { path: "/login", component: LoginForm, layout: null },
  { path: "/verify", component: VerifiOTP, layout: null },
];

const privateRoute = [];
export { publicRoute, privateRoute };
