import React, { useEffect } from "react";
import { useProducts } from "../../context/ProductContextProvider";
import UslovCard from "./UslovCard";

const UslovList = () => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {products ? (
        products.map((item) => <UslovCard key={item.id} item={item} />)
      ) : (
        <></>
      )}
    </div>
  );
};
export default UslovList;
