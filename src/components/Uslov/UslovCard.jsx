import React from "react";
import { useNavigate } from "react-router-dom";

const UslovCard = ({ item }) => {
  const naviagte = useNavigate();
  return (
    <div className="UslovCard">
      {/* <div style={{ backgroundImage: `url(${item.phote})` }}></div> */}
      <div className="textt">{item.name}</div>
      <div style={{ backgroundImage: `url(${item.picture})` }}></div>
    </div>
  );
};

export default UslovCard;
