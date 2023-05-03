import React, { useContext } from "react";
import "./styles.css";
import { ShopContext } from '../../context/shop-context';
export const ProductCard = (props) => {
  const { id, productImage, productName, price } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt="product" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> {price} TL</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Sepete Ekle {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};
