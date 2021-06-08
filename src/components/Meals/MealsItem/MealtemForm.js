import React,{useRef,useState} from 'react'
import Input from '../../UI/Input'

import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
    const [amountisValid,setAmountisValid] =useState(true);
    const amountInput=useRef();
     const submitHandler = (event) => {
         event.preventDefault();
         const enterdAmount=amountInput.current.value;
         const enterdAmountNumber=+enterdAmount;
         if(enterdAmount.trim().length===0||enterdAmountNumber<1||enterdAmountNumber>5)
         {
             setAmountisValid(false);
             return;
         }
         props.onAddToCart(enterdAmountNumber);
     };
    return (
       <form className={classes.form} onSubmit={submitHandler}>
           <Input  ref={amountInput} label="Amount" input={{id:'amount', type:'number',min:'1' ,max:'5',step:'1',defaultValue:'1'}}/>
           <button>+ Add</button>
           {
               !amountisValid&&<p>Please Enter Valid Amount(1-5)</p>
           }
       </form>
    )
}

export default MealItemForm
