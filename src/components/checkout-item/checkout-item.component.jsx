import React from "react";

import "./checkout-item.styles.scss";
import {
  removeItem,
  addItem,
  removeOneItem,
} from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
const CheckoutItem = ({
  cartItem,
  removeItemFromCart,
  addItem,
  removeOneItemFromCart,
}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  console.log(cartItem);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeOneItemFromCart(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => removeItemFromCart(cartItem)}
      >
        {" "}
        &#10008;{" "}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeItemFromCart: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeOneItemFromCart: (item) => dispatch(removeOneItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
