import { Link } from "react-router-dom";
import PetDog from "../../../assets/images/PetDog.png";
import Google from "../../../assets/images/Logo-google-icon-PNG.png";
const LoginForm = () => {
  return (
    <>
      <div className="w-full h-screen flex items-start">
        <div className="relative w-1/2 h-full flex flex-col">
          <img src={PetDog} className="w-full h-full" />
        </div>
        <div className="w-1/2 h-full bg-[#fff] flex flex-col p-20 justify-between items-center">
          <h1 className="w-full max-w-[550px] mx-auto text-xl text-[#060606] font-semibold mr-auto">
            Pet Home dịch vụ tốt nhất cho thú cưng
          </h1>
          <div className="w-full flex flex-col max-w-[550px]">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-4xl font-semibold mb-2">Login</h3>
              <p className="text-base mb-2">
                {" "}
                Welcome Back! Please fill your details.{" "}
              </p>
            </div>
            <div className="w-full flex flex-col">
              <input
                type="email"
                placeholder="Email"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <p className="text-sm">Remember me</p>
              </div>
              <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                Forgot Password ?
              </p>
            </div>
            <div className="w-full flex flex-col my-4">
              <button className="w-full text-white my-2 bg-[#060606] rounded-md p-4 text-center fkex items-center justify-center cursor-pointer">
                Log in
              </button>
              <button className="w-full text-[#060606] my-2 bg-white  border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                Register
              </button>
            </div>
            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-black"></div>
              <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">or</p>
            </div>
            <div className="w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black/20 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              <img src={Google} className="h-6 mr-2" />
              Sign In With Google
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="text-sm font-normal text-black">
              Don't have a account ?{" "}
              <span className="font-semibold underline underline-offset-2 cursor-pointer">
                Sign up for free ?
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
