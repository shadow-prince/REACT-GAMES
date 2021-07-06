import React from "react";
import GiReactor from "./Logo";

function Nav() {
  return (
    <div>
      <nav style={{ background: "#2E3B55" }}>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo center">
            Sai Kishore <GiReactor />
          </a>
          <ul id="nav-mobile" className="left hide-on-med-and-down"></ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
