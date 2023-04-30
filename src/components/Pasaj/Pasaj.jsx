import React from "react";
import "./Pasaj.css";
import car from "../../image/image-22-2-22c8b643.png";

const Pasaj = () => {
  return (
    <div className="pasaj">
      <div className="pasaj-box">
        <div className="pasaj-main">
          <div className="asd">
            <p>
              Мы не работаем с пассажирами, вы можете заказать такси или
              обратиться в техподдержку Яндекс Gо в своем пассажирском
              приложении
            </p>
            <button style={{ width: "250px" }} className="registr-buttom">
              работать
            </button>
          </div>
          <div className="two">
            <img src={car} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pasaj;
