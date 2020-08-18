//Most important file.

export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) =>
  cart.reduce((amount, item) => item.price + amount, 0);

console.log(getCartTotal);

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET-USER":
      return {
        ...state, //current state
        user: action.user,
      };
    case "ADD-TO-CART":
      // Mutable update
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE-FROM-CART":
      //We cloned the basket
      let newCart = [...state.cart];

      //Here we check to see if product exists
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      if (index >= 0) {
        //Here we remove the item if it exists
        newCart.splice(index, 1);
      } else {
        console.warn(`Cant`);
      }
      //return everythinh we have and give us the new cart.
      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
};

export default reducer;
