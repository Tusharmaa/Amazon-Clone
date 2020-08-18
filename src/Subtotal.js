import React from "react";
import "./Subtotal.css";
// import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import Currency from "./Currency";

function Subtotal() {
  const [{ cart }] = useStateValue();

  const getCartTotal = (a) =>
    a?.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className="subtotal">
      <Currency value={getCartTotal(cart)} />

      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;

//   function getCartTotal(a) {
//     a.reduce(function (amount, item) {
//       return item.price + amount;
//     }, 0);
//   }

//   <CurrencyFormat
//         renderText={(value) => (
//           <>
//             <p>
//               Subtotal ({cart?.length} items): <strong>{value}</strong>
//             </p>
//             <small className="subtotal-gift">
//               <input type="checkbox" /> This order contains a gift
//             </small>
//           </>
//         )}
//         decimalScale={2}
//         value={getCartTotal(cart)}
//         displayType={"text"}
//         thousandSeparator={true}
//         prefix={"$"}
//       />
