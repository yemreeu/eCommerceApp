import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";


export const CartItem = (props) => {
  const { id, productImage, productName, price } = props.data;
  const { cartItems, addToCart, removeFromCart,updateCartItemAmount } = useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <b>{price}</b>
          <div className="countHandler">
            <button onClick={() => removeFromCart(id)}> - </button>
            <input value={cartItems[id]} onChange={(e) => updateCartItemAmount(Number(e.target.value),id)}/>
            <button onClick={() => addToCart(id)}> + </button>

          </div>
        </p>
      </div>
    </div>
  );
};
