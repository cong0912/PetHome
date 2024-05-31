import Register from "../Atomic Components/Register";
// const role = localStorage.getItem("role");
const publicRoute = [{ path: "/register", component: Register, layout: null }];

const privateRoute = [];
export { publicRoute, privateRoute };
