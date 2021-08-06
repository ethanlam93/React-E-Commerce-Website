import React from "react"   
import { connect } from 'react-redux';
import "./cart-icon.styles.scss"


import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartIcon = ({toggleCartHidden}) => 
    (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count"></span>
    </div>
    )


const mapDispatchToProps = dispatch => ({
        toggleCartHidden: () => dispatch(toggleCartHidden())
      });


// const mapStateToProps = createStructuredSelector({
//     itemCount: selectCartItemsCount
//   });
export default connect(null,mapDispatchToProps)(CartIcon)