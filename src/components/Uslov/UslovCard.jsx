import React from "react";
import { useNavigate } from "react-router-dom";

const UslovCard = ({ item }) => {
  const naviagte = useNavigate();
  return (
    <div
      style={{
        marginTop: "5%",
        textAlign: "center",
        // display: "flex",
        // justifyContent: "space-around",
        // flexWrap: "wrap",

        // display: "grid",
        // gridTemplateRows: "repeat(3, 1fr",
        // gridTemplateColumns: "repeat(3, 1fr)",
        // display: "flex",
        // flexDirection: "columns",
      }}
      className="UslovCard"
    >
      <div>
        <div
          style={{
            backgroundImage: `url(${item.picture})`,
            // display: "flex",
            justifyContent: "flex-end",
            ackgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            width: "420px",
            height: "270px",
          }}
        ></div>
        <div style={{ padding: "10%", marginBottom: "5%" }} className="text">
          {item.name}
        </div>
      </div>
    </div>
  );
};

export default UslovCard;
