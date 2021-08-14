import React from "react";

import "./checkout-item.styles.scss";
import { removeItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
const CheckoutItem = ({ cartItem, removeItemFromCart }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  console.log(cartItem);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
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
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
