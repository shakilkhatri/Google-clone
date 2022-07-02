import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <Link to="/gmail">Gmail</Link>
      <Link to="/images">Images</Link>
      <div className="icons">
        <AppsIcon />
      </div>
      <div className="icons">
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default Header;
