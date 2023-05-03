import React, { useEffect } from "react";
import { useProducts } from "../../context/ProductContextProvider";
import UslovCard from "./UslovCard";

const UslovList = ({ currentData }) => {
  const [products, getProducts] = useProducts();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <div>asd</div>
      {products ? (
        currentData().map((item) => <UslovCard key={item.id} item={item} />)
      ) : (
        <></>
      )}
    </div>
  );
};
