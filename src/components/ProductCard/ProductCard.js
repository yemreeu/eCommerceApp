import React from 'react'
import "./styles.css"
export const ProductCard = (props) => {
    const {id,productImage,productName,price} = props.data;
  return (
 

    <div className="product">
    <img src={productImage} alt="product" />
    <div className="description">
      <p>
        <b>{productName}</b>
      </p>
      <p> {price} TL</p>
    </div>
    <button className="addToCartBttn" 
    // onClick={() => addToCart(id)}
    >
      Sepete Ekle 
      {/* {cartItemCount > 0 && <> ({cartItemCount})</>} */}
    </button>
  </div>
  )
};
