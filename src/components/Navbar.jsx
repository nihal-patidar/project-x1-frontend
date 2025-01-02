import React, { useContext } from "react";
import { BiExit, BiUser, BiIdCard } from "react-icons/bi";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let { userData } = useContext(UserContext);

  //logout
  let navigate = useNavigate();
  const logout = () => {
    console.log("logout run");
    localStorage.removeItem("userData");
    navigate("/");
  };
  return (
    <div className="nav px-8 sm:pl-64 py-5 flex items-center justify-around bg-slate-100 h-[5rem] w-full">
      <h2 className="sm:hidden font-bold text-2xl text-[#26bc82] w-full pl-12 py-4 border-b-2 border-green-300">E-Validation</h2>

    </div>
  );
};

export default Navbar;

