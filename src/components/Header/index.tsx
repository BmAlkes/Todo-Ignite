import React from "react";
import "./styled.css";
import logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
    </div>
  );
};

export default Header;
