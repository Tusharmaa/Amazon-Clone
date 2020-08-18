import React from "react";
import { useStateValue } from "./StateProvider";

function Currency({ value }) {
  const [{ cart }] = useStateValue();

  return (
    <div>
      <p>
        Subtotal ({cart?.length} items): <strong>${value}</strong>
      </p>
      <small className="subtotal-gift">
        <input type="checkbox" /> This order contains a gift
      </small>
    </div>
  );
}

export default Currency;
