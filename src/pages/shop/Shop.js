import React from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { PRODUCTS } from "../../Products"
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Yiğitcan Köse Shopping</h1>
        <br />
        <br />
        <div className="products">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
