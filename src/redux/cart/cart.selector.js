// Selectors library are used for memorization and efficiency, so when state changes but the value stay the same, the component wouldn't re-render
import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

//create a selector for Cart Items, the first parameter can be an array or multiple args separated by ","
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems // the second arg of createSelector must be a function that return the state you want to select
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulator, cartItem) => accumulator + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price,
    0
  )
);
