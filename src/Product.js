import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, rating, price, image }) {
  const [{}, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD-TO-CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p className="product-infoP">{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
