import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  console.log(id, title, image, price, rating);
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE-FROM-CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct-image" src={image} alt="" />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <div className="checkoutProduct-buttonInfo">
        <button onClick={removeFromCart} className="checkoutProduct-button">
          Remove item
        </button>
      </div>
      {/* <p className="checkoutProduct-rating">{rating}</p> */}
    </div>
  );
}

export default CheckoutProduct;
