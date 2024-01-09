import useGoogleAuth from "./../../hooks/useGoogleAuth";
import useAuth from "./../../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import LoginModal from "../Authentication/LoginModal";

const Header = () => {
  const { handleGoogleLogin } = useGoogleAuth();
  const { logOut, user, loading } = useAuth();
  if (loading) {
    return (
      <span className="loading bg-red-700 loading-spinner loading-lg"></span>
    );
  }
  const handleLogOut = () => {
    logOut()
      .then()
      .then((error) => console.error(error));
  };

  const menu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/schedule">Match Schedule</NavLink>
      </li>
      <li>
        <NavLink to="/players">All Players</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar flex-wrap container mx-auto  bg-base-100">
      <div className="flex-col mx-auto lg:flex-row lg:flex-1">
        <img
          className="w-20 mr-5"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/d/da/BUET_LOGO.svg/1200px-BUET_LOGO.svg.png"
          alt=""
        />
        <a className=" text-2xl">BUET Employer Cricket Club</a>
      </div>
      <div className="flex-col gap-2 mx-auto md:flex-row md:flex-none">
        <nav className="menu menu-horizontal  px-1 text-lg">{menu}</nav>
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={-1} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-pink-100 rounded-box w-72"
              >
                <div className="justify-between mb-2 space-y-3 text-center mx-auto items-center">
                  <div className="avatar">
                    <img className="w-12 rounded-full" src={user.photoURL} />
                  </div>

                  <p className="text-md font-bold text-rose-600">
                    {user.displayName}
                  </p>
                  <span className="badge text-center">Player Role</span>
                  <br />
                  <Link to="/profile">
                    <button className="btn btn-primary my-5 w-full">
                      View Profile
                    </button>
                  </Link>
                </div>

                <hr />

                <Link className="justify-between mb-5 mt-5 items-center">
                  {/* <p className="text-md font-bold text-rose-600">Dashboard</p> */}
                </Link>

                <Link
                  onClick={handleLogOut}
                  className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Log Out
                </Link>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link
              onClick={handleGoogleLogin}
              className="btn hover:bg-blue-800 bg-rose-800  text-white"
            >
              Registration
            </Link>
            <>
              <LoginModal />
            </>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
