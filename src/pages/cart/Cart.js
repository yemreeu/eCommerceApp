import React, {useContext} from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../context/shop-context";
import {CartItem} from "./cart-item"
import "./cart.css"
import {useNavigate} from 'react-router-dom'

export const Cart = () => {
  const { cartItems,getTotalCartAmount } = useContext(ShopContext);
  const totalCartAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Sepetinizdeki Ürünler</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] != 0) {
            return <CartItem data={product}/>
          }
        })}
      </div>
    
        {totalCartAmount > 0 ? (
      <div className="checkout">
        <p> Toplam tutar: {totalCartAmount} TL</p>
        <button onClick={() => navigate("/")}>Alışverişe devam et</button>
        {/* <button></button> */}
      </div>
        ) : (
            <h1>Sepetinizde ürün bulunmamaktadır.</h1>
        )}
    </div>
  );
};
