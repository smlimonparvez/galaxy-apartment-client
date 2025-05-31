import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div className="navbar bg-base-100 border-b">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "mr-3 text-base font-semibold text-blue-700 underline"
                    : "mr-3 text-gray-500 text-base font-semibold hover:text-blue-700 hover:underline"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  isActive
                    ? "mr-3 text-base font-semibold text-blue-700 underline"
                    : "mr-3 text-gray-500 text-base font-semibold hover:text-blue-700 hover:underline"
                }
              >
                Apartment
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          {" "}
          <img
            className="w-16 h-12"
            src="https://i.postimg.cc/MHnTWtLT/Building-Logo-1.png"
            alt=""
          />
          Galaxy Apartment
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            {" "}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "mr-3 text-base font-semibold text-blue-700 underline"
                  : "mr-3 text-gray-500 text-base font-semibold hover:text-blue-700 hover:underline"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive
                  ? "mr-3 text-base font-semibold text-blue-700 underline"
                  : "mr-3 text-gray-500 text-base font-semibold hover:text-blue-700 hover:underline"
              }
            >
              Apartment
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex flex-col gap-2 md:flex-row items-end md:items-center pr-3">
        {/* user and profile */}
        {user && (
          <div
            className="tooltip-left tooltip"
            data-tip={`Welcome, ${user.displayName}`}
          >
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-10 h-10 rounded-full border border-blue-500"
            />
          </div>
        )}

        {user ? (
          <button onClick={handleLogOut} className="btn">
            Log Out
          </button>
        ) : (
          <div className="mr-5">
            <Link to="/login" className="btn btn-ghost text-base font-semibold">
              Log In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
