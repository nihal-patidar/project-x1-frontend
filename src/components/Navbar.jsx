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
    <div className="nav px-8 py-5 flex items-center justify-around bg-slate-100 h-[5rem] w-full">
      <h2 className="font-bold text-2xl w-[20%]">E-Validation</h2>
      <Link to="/home/profile">
          <div className="flex items-center gap-2 cursor-pointer px-2 py-2 rounded-full bg-slate-200">
            <p>{userData?.name}</p>
            <BiUser />
          </div>
        </Link>
        <Button
          ripple={true}
          variant="text"
          fullWidth={true}
          className="flex items-center gap-3 text-white"
          onClick={logout}
        >
          LogOut <BiExit />
        </Button>
      {/* <div className="flex items-center justify-between w-[30%]">
      </div> */}
    </div>
  );
};

export default Navbar;
