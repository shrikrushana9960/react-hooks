import React,{useContext} from 'react'
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealtemForm';
const MealItem = (props) => {
    const cartctx=useContext(CartContext);
   const addToCartHandler=amount=>{
    cartctx.addItem({
        id:props.id,
        name:props.name,
        amount:amount,
        price:props.price,
    })

   };
    const price=`$${props.price.toFixed(2)}`;
    return (
        <li className={classes.meal}>
            <div>
            <h3>{props.name}</h3>
            <div  className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>

        </li>

    )
}

export default MealItem