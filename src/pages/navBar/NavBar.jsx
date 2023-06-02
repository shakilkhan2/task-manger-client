import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-around  md:justify-between mt-4">
      <Link to="/">
        <p className="text-amber-600 font-bold  text-4xl ms-4">Task Manager</p>
      </Link>
      <div className="me-20">
        <Link to="/addtask">
          <button className="btn btn-outline btn-warning text-black font-bold">
            Add a task
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
