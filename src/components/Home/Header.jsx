import React from "react";

function Header() {

  return (
    <header>
      <h1
        onClick={() => {
          window.location.replace("/");
        }}
      >
        DIVE <span>INTO</span> IVE
      </h1>
    </header>
  );
}

export default Header;
