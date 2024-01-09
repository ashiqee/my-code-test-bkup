import useAuth from "./../../hooks/useAuth";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/Fa";

const LoginModal = () => {
  const { googleSignIn } = useAuth();
  // const location = useLocation();
  // const navigate = useNavigate();

  const notify = () => toast.success("Login Successfully!");
  const notifyGoogle = (e) => toast.success(e);
  const notifyGoogleError = (e) => toast.error(e);
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
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn hover:bg-blue-800 bg-rose-800 text-white "
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Login
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="text-center my-10">
            <h3 className="font-bold text-2xl mb-10">Login now!</h3>
            <button className="btn" onClick={handleGoogleLogin}>
              {" "}
              <FaGoogle className="text-xl text-red-500" />
              <h2 className="text-center uppercase text-xl  text-white">
                Login with google
              </h2>{" "}
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default LoginModal;
