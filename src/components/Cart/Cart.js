import React,{useContext} from 'react'
import CartContext from '../../store/cart-context';

import Model from '../UI/Model';
import classes from './Cart.module.css'
import CartItem from './CartItem';
const Cart = (props) => {
    const contextCtx=useContext(CartContext);
    const totalAmount=`$${contextCtx.totalAmount.toFixed(2)}`;
    const hasItems=contextCtx.items.length>0;
    const cartItemRemove=id=>{
        contextCtx.removeItem(id);
    };
    const cartItemAddHandler=item=>{
        contextCtx.addItem(item);

    }
    const cartItems=<ul className={classes['cart-items']}>{contextCtx.items.map(item=><CartItem key={item.id} onRemove={cartItemRemove.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)} name={item.name} price={item.price} amount={item.amount}/>)}</ul>;
    return (
        <Model onClose={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onHideCart} className={classes['button--alt']}>Close</button>
               {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Model>
    )
}

export default Cart
