import DefaultLayout from "Components/layout/DefaultLayout";
import LoginForm from "Components/Molescule/LoginForm/LoginForm";
import VerifiOTP from "Components/Molescule/VerifyOtp";
import Register from "Components/Molescule/RegisterForm/index.jsx";
import GioiThieu from "Components/Molescule/GioiThieu/GioiThieu";
import Contact from "Components/Molescule/Contact/Contact";
import ErrorPage from "Components/Molescule/ErrorPage/ErrorPage";
import Test from "Components/Molescule/test";
import Dogfood from "Components/Molescule/ProductPage/Dogfood/Dogfood";
import Catfood from "Components/Molescule/ProductPage/Catfood/Catfood";
import Dogproduct from "Components/Molescule/ProductPage/Dogproduct/Dogproduct";
import Catproduct from "Components/Molescule/ProductPage/Catproduct/Catproduct";
import HomePage from "Components/Pages/HomePage/HomePage";
// const role = localStorage.getItem("role");
const publicRoute = [
  { path: "/register", component: Register, layout: null },
  { path: "/introduction", component: GioiThieu, layout: DefaultLayout },
  { path: "/login", component: LoginForm, layout: null },
  { path: "/verify", component: VerifiOTP, layout: null },
  { path: "/contact", component: Contact, layout: DefaultLayout },
  { path: "/dog-food", component: Dogfood, layout: DefaultLayout },
  { path: "/cat-food", component: Catfood, layout: DefaultLayout },
  { path: "/dog-product", component: Dogproduct, layout: DefaultLayout },
  { path: "/cat-product", component: Catproduct, layout: DefaultLayout },
  { path: "/", component: HomePage, layout: DefaultLayout },
  { path: "*", component: ErrorPage, layout: null },
];

const privateRoute = [];
export { publicRoute, privateRoute };
