import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex gap-5 text-center justify-center items-center p-3  text-2xl font-semibold bg-slate-900 text-white">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/addCoffee">Add Coffee</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
      <NavLink to="/signup">Sing Up</NavLink>
    </div>
  );
};

export default Header;
