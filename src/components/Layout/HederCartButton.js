import React,{useContext} from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context';
const HederCartButton = (props) => {
  const cartctx=useContext(CartContext);
  const numberOfCartItems=cartctx.items.reduce((currentNumber,item)=>{
    return currentNumber+item.amount;
  },0);
    return (
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    );
}

export default HederCartButton
