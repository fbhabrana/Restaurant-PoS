// AppBar.js
import React from "react";
import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <div className="bg-black text-green-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">
          Your Restaurant Name
        </Link>

        <nav className="space-x-4">
          <Link to="/menu" className="hover:underline">
            Menu
          </Link>
          <Link to="/tables" className="hover:underline">
            Tables
          </Link>
          <Link to="/orders" className="hover:underline">
            Orders
          </Link>
          <Link to="/help" className="hover:underline">
            Help
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default AppBar;
