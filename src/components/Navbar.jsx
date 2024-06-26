import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(console.log("User SignOut successful"))
      .catch((error) => console.error(error));
  };

  const navLinks = (
    <>
      <NavLink to="/">
        <button className="btn">Home</button>
      </NavLink>
      <NavLink to="/register">
        <button className="btn">Register</button>
      </NavLink>
      {user && (
        <>
          <NavLink to="/orders">
            <button className="btn">Orders</button>
          </NavLink>
          <NavLink to="/profile">
            <button className="btn">Profile</button>
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Grand Reunion</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <span>{user.email}</span>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm">LogIn</button>
          </Link>
        )}
        {user && (
          <a className="btn btn-sm" onClick={handleSignOut}>
            Sign Out
          </a>
        )}
      </div>
    </div>
  );
};

export default Navbar;
