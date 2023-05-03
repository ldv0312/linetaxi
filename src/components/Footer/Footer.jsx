import React from "react";
import "./Footer.css";
import a from "../../image/a.jpg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-flow">
        <div className="main-footer">
          <div className="for-image">
            {/* <img style={{ width: "30%" }} src={a} alt="" /> */}
          </div>
          <div className="for-title">
            <ul className="ul">
              <li>главная страница</li>
              <li>новости и акции</li>
              <li>регистрация</li>
            </ul>
            <ul className="ul">
              <li>водителям</li>
              <li>пассажирам</li>
              <li>контакты</li>
            </ul>
          </div>
        </div>
        <div className="asd"></div>
        <div style={{ color: "white", padding: "30px", fontSize: "25px" }}>
          Публичная оферта и политика конфиденциальности
        </div>
      </div>
    </div>
  );
};

export default Footer;
