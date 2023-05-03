import React from "react";
import "./Home.css";
import taxi from "../../image/NAT_181211-Oneroad-Taxi-(Read-Only)_resources1_16a0853f760_large.jpg";
import phone from "../../image/smartphone_PNG101502.png";
import ogo from "../../image/fire.svg";
import taxi1from from "../../image/qa3e0683136c5ie96u33s.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="box">
        <div className="the_main-section">
          <div className="section-one">
            <div className="title-left">
              <div className="asd">
                <span style={{ color: "black", fontWeight: "900" }}>
                  Япартнёр —
                </span>{" "}
                крупнейший официальный партнер Яндекс Go с самыми выгодными
                условиями на рынке такси!
                <button
                  onClick={() => navigate("/contacts")}
                  className="registr-buttom"
                >
                  Связаться с нами
                </button>
              </div>
            </div>
            <div className="title-right-image">
              <img src={taxi} alt="" />
            </div>
          </div>
        </div>
        <div className="the_first_main_section">
          <h1>Только в нашем парке:</h1>
          <div className="category">
            <div className="main_category">
              <div className="kom">
                <h1 className="h21">4%</h1>
                <p className="p21">Минимальная комиссия</p>
              </div>
              <div className="kruglot">
                <h1 className="h21">24/7</h1>
                <p className="p21">Реальная техподдержка</p>
              </div>
            </div>
            <div className="main_category-two">
              <div className="kom">
                <img style={{ width: "30%" }} src={phone} alt="" />
                <p className="p22">Вывод денег через приложение</p>
              </div>
              <div className="kruglot">
                <img style={{ width: "15%" }} src={ogo} alt="" />
                <p className="p23">
                  Акции, скидки, выгодные условия для всех партнеров
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate("/contacts")}
            className="registr-buttom"
          >
            Связаться с нами
          </button>
        </div>
        <div className="the_second_main_section">
          <h1>Наши водители</h1>
          <div className="image_part">
            <img style={{ width: "19%" }} src={taxi1from} alt="" />
            <img style={{ width: "19%" }} src={taxi1from} alt="" />
            <img style={{ width: "19%" }} src={taxi1from} alt="" />
            <img style={{ width: "19%" }} src={taxi1from} alt="" />
            <img style={{ width: "19%" }} src={taxi1from} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
