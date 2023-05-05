import React, { useState } from "react";
import "./uslov.css";
import { useProducts } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
// import UslovList from "./UslovList";
const AddUslov = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    picture: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      let obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
    }
  };
  return (
    <div className="adduslov">
      <div className="add">
        <input
          name="name"
          onChange={handleInp}
          type="text"
          placeholder="-- add number"
        />
        <input
          name="picture"
          onChange={handleInp}
          type="picture"
          placeholder="-- add your name"
        />
        <button
          onClick={() => {
            addProduct(product);
            navigate("/uslov");
          }}
        >
          add +
        </button>
      </div>
    </div>
  );
};

export default AddUslov;
