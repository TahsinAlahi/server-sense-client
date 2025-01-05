import { Link, useLocation, useNavigate } from "react-router-dom";
import loginPageBg from "../assets/login-image.png";
import LoginWithGoogle from "../components/LoginWithGoogle";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useRef, useState } from "react";
import { useAuth } from "../providers/AuthProvider";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef(null);
  const { loginWithEmail, forgotPassword } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  async function handleLogin(e) {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const { email, password } = Object.fromEntries(formData);
    const res = await loginWithEmail(email, password);

    if (res.status === "success")
      navigate(state?.from === "/login" ? "/" : state?.from || "/");
  }

  async function onForgotPassword() {
    const email = formRef.current.email.value;
    await forgotPassword(email);
  }

  return (
    <main className=" min-h-[calc(100svh-72px)] w-full max-w-screen-xl mx-auto flex items-center justify-center relative font-poppins py-5 text-white">
      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 select-none">
        <img
          src={loginPageBg}
          alt=""
          className="h-full w-full object-center object-cover"
        />
      </div>
      <div className="z-10 w-full md:w-1/2  bg-white/50 dark:bg-black/50 backdrop-filter backdrop-blur-sm mx-3 md:mx-0 py-5">
        <div className="flex items-center justify-center flex-col w-5/6 lg:w-1/2 mx-auto">
          <h1 className="text-4xl font-semibold font-cinzel border-b-4 border-purple-800">
            Login
          </h1>
          <form className="mt-7 w-full" ref={formRef} onSubmit={handleLogin}>
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-semibold text-lg">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="px-3 py-2 text-black outline-none rounded-md border border-gray-400 shadow-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 relative">
                <div
                  className="absolute right-3 bottom-3 cursor-pointer text-black"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <IoMdEye className="text-xl" />
                  ) : (
                    <IoMdEyeOff className="text-xl" />
                  )}
                </div>
                <label htmlFor="password" className="font-semibold text-lg">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="px-3 py-2 outline-none rounded-md border text-black border-gray-400 shadow-md"
                  required
                />
              </div>
            </div>
            <button
              className="mt-3 text-sm font-semibold border-b-4 border-transparent hover:border-purple-900 transition-all duration-200"
              onClick={onForgotPassword}
              type="button"
            >
              Forgot Password
            </button>
            <button className="w-full px-3 py-2 rounded-md bg-purple-900 text-inherit font-semibold hover:bg-purple-800 transition-all duration-200 mt-3 text-white">
              Login
            </button>
          </form>
          <div className="flex items-center gap-2 my-4 w-full">
            <div className="flex-1 border-t-2 border-black dark:border-white" />
            <h1 className="font-semibold text-xl">OR</h1>
            <div className="flex-grow border-t-2 border-black dark:border-white" />
          </div>
          <LoginWithGoogle />
          <h3 className="mt-4 text-sm">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              state={{ from: state?.from || "/" }}
              className="text-purple-900 dark:text-purple-400 border-b-2 border-transparent hover:border-purple-900 dark:hover:border-purple-400 transition-all duration-200 font-semibold"
            >
              Register
            </Link>
          </h3>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
