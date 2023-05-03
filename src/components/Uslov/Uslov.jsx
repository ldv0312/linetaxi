import React, { useEffect } from "react";
import "./uslov.css";
import { useNavigate } from "react-router-dom";

const Uslov = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="uslov">
        <div className="uslov-main">
          <div className="for-add">
            <button
              onClick={() => navigate("/addUslov")}
              className="addButton registr-buttom"
            >
              add the client base
            </button>
          </div>
          <div className="the_just_for_cards">
            <div
              style={{ display: "flex", justifyContent: "space-arounds" }}
              className="add-item"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Uslov;
