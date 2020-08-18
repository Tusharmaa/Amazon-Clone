import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  //whenever you want to manipulate the dataLayer then call dispatch.
  const [{ cart }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg"
          alt="ad"
        />
        {cart?.length === 0 ? (
          <div className="checkout-text">
            <h1>Your cart is empty</h1>
            <p>
              Currently, you have no items in your cart. To buy items, click
              "Add to cart" button next to the item.
            </p>
          </div>
        ) : (
          <div className="checkout-text">
            <h1>Your shopping Cart</h1>
            <hr />
            {/* List out all the checkout products */}
            {console.log("This is my cart item", cart)}
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {cart?.length > 0 && (
        <div className="checkout-right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
