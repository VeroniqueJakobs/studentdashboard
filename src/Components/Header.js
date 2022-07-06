import React from "react";

function Header() {
  return (
    <div className="header">
      <img
        src={require("../WincLogo.png")}
        alt="WincLogo"
        className="winc-logo"
      />
      <h1 className="name-header"> Student Dashboard</h1>
    </div>
  );
}

export default Header;
