import React, { useState } from "react";
import "../navbar/navbar.scss";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <a href="/" className="brand">
        LOGO
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Главная
          </a>
        </li>
        <li className="nav__item">
          <a href="/passengers" className="nav__link">
            Пассажирам
          </a>
        </li>
        <li className="nav__item">
          <a href="/conditions" className="nav__link">
            Условия
          </a>
        </li>
        <li className="nav__item">
          <a href="/contacts" className="nav__link">
            Контакты
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;
