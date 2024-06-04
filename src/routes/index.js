import DefaultLayout from "Components/layout/DefaultLayout";
import LoginForm from "Components/Molescule/LoginForm/LoginForm";
import VerifiOTP from "Components/Molescule/VerifyOtp";
import Register from "Components/Molescule/RegisterForm/index.jsx";
import GioiThieu from "Components/Molescule/GioiThieu/GioiThieu";
import Contact from "Components/Molescule/Contact/Contact";

// const role = localStorage.getItem("role");
const publicRoute = [
  { path: "/register", component: Register, layout: null },
  { path: "/introduction", component: GioiThieu, layout: DefaultLayout },
  { path: "/login", component: LoginForm, layout: null },
  { path: "/verify", component: VerifiOTP, layout: null },
  { path: "/contact", component: Contact, layout: DefaultLayout },
];

const privateRoute = [];
export { publicRoute, privateRoute };
