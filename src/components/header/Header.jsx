import "./header.css";
import Navbar from "./Navbar";
import Logo from "./Logo";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="header">
      <Logo />
      <Navbar toggle={toggle} setToggle={setToggle} />
      <div className="header-menu">
        {toggle ? (
          <i
            onClick={() => setToggle((prev) => !prev)}
            className="bi bi-x-lg"
          ></i>
        ) : (
          <i
            onClick={() => setToggle((prev) => !prev)}
            className="bi bi-list"
          ></i>
        )}
      </div>
    </header>
  );
};

export default Header;
