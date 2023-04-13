import React from "react";
import "../Contacts/Contacts.scss";
import Socialweb from "./Socialweb";
import GoogleMap from "./GoogleMap";

const Contacts = () => {
  return (
    <div className="container">
      <h1 className="contacts__block">Контакты</h1>
      <div className="main__block">
        <div className="left__block">
          <p className="social__web">
            Социальные сети
            <span className="icons">
              <Socialweb />
            </span>
          </p>
          <p className="call__me">
            Позвоните нам
            <span className="phone">+999-99-99-99</span>
          </p>
          <p className="write__me">
            Напишите нам
            <span className="text__me">+999-99-99-99</span>
          </p>
        </div>
        <div className="right__block">
          <p className="map__block">
            Посмотреть наши офисы на карте Google
            <GoogleMap />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
