import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginWithGoogle from "../components/LoginWithGoogle";
import registerPageBg from "../assets/register-image.png";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useRef, useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import passwordValidator from "../utils/passwordValidator";
import { toast } from "react-toastify";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef(null);
  const { registerWithEmail } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  async function handleRegister(e) {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const { email, username, password, imageUrl } =
      Object.fromEntries(formData);

    if (!passwordValidator(password)) {
      toast.error("Try a stronger password!");
      return;
    }

    const res = await registerWithEmail(username, email, password, imageUrl);

    if (res.status === "success") navigate(state.from || "/");
  }

  return (
    <main className=" min-h-[calc(100svh-72px)] w-full max-w-screen-xl mx-auto flex items-center justify-center relative font-poppins py-10">
      <div className="absolute top-0 right-0 bottom-0 left-0 select-none">
        <img
          src={registerPageBg}
          alt=""
          className="h-full w-full object-center object-cover"
        />
      </div>
      <div className="z-10 w-full md:w-1/2  bg-white/50 dark:bg-black/50 backdrop-filter backdrop-blur-sm mx-3 md:mx-0 py-5">
        <div className="flex items-center justify-center flex-col w-5/6 lg:w-1/2 mx-auto">
          <h1 className="text-4xl font-semibold font-cinzel border-b-4 border-purple-800 ">
            Register
          </h1>
          <form className="mt-7 w-full" onSubmit={handleRegister} ref={formRef}>
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
              <div className="flex flex-col gap-1">
                <label htmlFor="username" className="font-semibold text-lg">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="px-3 py-2 text-black dark:border-white outline-none rounded-md border border-gray-400 shadow-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="imageUrl" className="font-semibold text-lg">
                  Image URL
                </label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  className="px-3 py-2 outline-none rounded-md border text-black  border-gray-400 shadow-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 relative">
                <div
                  className="absolute right-3 bottom-3 text-black cursor-pointer"
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
                  name="password"
                  id="password"
                  className="px-3 py-2 text-black outline-none rounded-md border border-gray-400 shadow-md"
                  required
                />
              </div>
            </div>

            <button className="w-full px-3 py-2 rounded-md bg-purple-900 text-white font-semibold hover:bg-purple-800 transition-all duration-200 mt-5 ">
              Register
            </button>
          </form>
          <div className="flex items-center gap-2 my-4 w-full">
            <div className="flex-1 border-t-2 border-black dark:border-white" />
            <h1 className="font-semibold text-xl">OR</h1>
            <div className="flex-grow border-t-2 border-black dark:border-white" />
          </div>
          <LoginWithGoogle />
          <h3 className="mt-4 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-900 dark:text-purple-400 border-b-2 border-transparent hover:border-purple-900 dark:hover:border-purple-400 transition-all duration-200 font-semibold"
            >
              Login
            </Link>
          </h3>
        </div>
      </div>
    </main>
  );
}

export default RegisterPage;
