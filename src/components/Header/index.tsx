import React from "react";
import logo from "../../assets/Logo.png";
import "./styled.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
    </div>
  );
};

export default Header;
