import React from "react";
import { BiIdCard } from "react-icons/bi";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="h-screen px-2 py-4 bg-slate-100 w-[240px]">
      <div className="tabs flex flex-col items-start gap-2 w-full">
        <h2 className="font-bold text-xl">Features</h2>

        <Link to="/home">
          <div className="flex items-center h-8 border-b-2 px-4 border-yellow-400 w-[240px] visited:bg-white active:bg-black">
          <h2 className="">Dashboard</h2>

          </div>
        </Link>
        <Link to="/home">
          <Button
            ripple={true}
            variant="text"
            fullWidth={true}
            className="flex items-center gap-3 text-white"
          >
            <BiIdCard /> Dashboard
          </Button>
        </Link>
        <Link to="/home/services">
          <Button
            ripple={true}
            variant="text"
            fullWidth={true}
            className="flex items-center gap-3 text-white"
          >
            <BiIdCard /> Services
          </Button>
        </Link>
        <Link to="/home/validators">
          <Button
            ripple={true}
            variant="text"
            fullWidth={true}
            className="flex items-center gap-3 text-white"
          >
            <BiIdCard /> Validators
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
