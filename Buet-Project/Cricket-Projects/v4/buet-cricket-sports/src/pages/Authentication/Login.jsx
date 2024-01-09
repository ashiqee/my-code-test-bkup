import { Link, useLocation, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaGoogle } from "react-icons/Fa";

import useAuth from "./../../hooks/useAuth";

const Login = () => {
  const { signIn, googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const notify = () => toast.success("Login Successfully!");
  const notifyGoogle = (e) => toast.success(e);
  const notifyGoogleError = (e) => toast.error(e);
  //   const notifyError = () => toast.error("Email or Password is invalid!");

  //   const handleLogin = (e) => {
  //     e.preventDefault();
  //     const form = new FormData(e.currentTarget);

  //     const email = form.get("email");
  //     const password = form.get("password");

  //     signIn(email, password)
  //       .then((res) => {
  //         console.log(res.user);
  //         notify();
  //         navigate(location?.state ? location.state : "/");
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         notifyError();
  //       });
  //   };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((res) => {
        notify();
        notifyGoogle(res.user.displayName);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => notifyGoogleError(error.message));
  };

  return (
    <div className="min-h-screen">
      <div className="w-full max-w-sm p-4 min-h-[150px] bg-transparent mx-auto bg-opacity-10 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        {/* <form onSubmit={handleLogin} className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h5>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
              </div>
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <button className="w-full text-white bg-blue-700 hover:bg-rose-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              to="/Registration"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </Link>
          </div>
        </form> */}
        <div>
          <div
            className="w-full btn  mt-4 flex gap-2 hover:bg-rose-400  mx-auto rounded-3xl bg-blue-600"
            onClick={handleGoogleLogin}
          >
            <span className="items-center  flex gap-2 mx-auto">
              <FaGoogle className="text-xl text-red-500" />
              <h2 className="text-center uppercase text-xl  text-white">
                Login with google
              </h2>
            </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
