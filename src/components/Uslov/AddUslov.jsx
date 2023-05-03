import React, { useState } from "react";
import "./uslov.css";
import { useProducts } from "../../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";
const AddUslov = () => {
  const navigate = useNavigate();
  const { addProduct } = useProducts();

  const [product, setProduct] = useState({
    name: "",
    phote: "",
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
          name="phote"
          onChange={handleInp}
          type="text"
          placeholder="-- add number"
        />
        <input
          name="name"
          onChange={handleInp}
          type="text"
          placeholder="-- add your name"
        />
        <button
          onClick={() => {
            addProduct(product);
            navigate("/Uslovlist");
          }}
        >
          add +
        </button>
      </div>
    </div>
  );
};

export default AddUslov;
