import React, { useRef } from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header = () => {
  const myRef = useRef(null);
  const menuRef = useRef(null);

  const handleClick = () => {
    myRef.current.classList.toggle("nav__toggle-icon--open");
    menuRef.current.classList.toggle("menu--open");
  };

  const navLinks = [
    { id: 1, title: "Home" },
    { id: 2, title: "About us" },
    { id: 3, title: "Resume" },
    { id: 4, title: "Service" },
    { id: 5, title: "Portfolio" },
    { id: 6, title: "Pricing" },
    { id: 7, title: "Contact us" },
  ];

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <h1 className="nav__logo">Ali</h1>
            <ul className="menu" ref={menuRef} onClick={handleClick}>
              {navLinks.map((nav) => (
                <li className="menu__item">
                  <Link
                    to={nav.title}
                    duration={500}
                    smooth={130}
                    className="menu__link"
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div
              className={"nav__toggle-icon"}
              ref={myRef}
              onClick={handleClick}
            >
              <div className="nav__toggle-line"></div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
