import Register from "../Atomic Components/Register";
import Test from "../Atomic Components/test";
import DefaultLayout from "../Atomic Components/layout/DefaultLayout";
// const role = localStorage.getItem("role");
const publicRoute = [
  { path: "/register", component: Register, layout: null },
  { path: "/test", component: Test, layout: DefaultLayout },
];

const privateRoute = [];
export { publicRoute, privateRoute };
