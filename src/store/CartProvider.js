import React,{useState,useReducer} from 'react';
import CartContext from './cart-context';
 const defaultCartState = {
   items: [],
   totalAmount: 0,
 };
 const cartReducer = (state, action) => {
    if(action.type==='ADD')
    {
     const updatedTotalAmount =state.totalAmount + action.item.price * action.item.amount;
        const extstingCartItemIndex=state.items.findIndex(item=>item.id===action.item.id); 
        const exstingCartItem = state.items[extstingCartItemIndex];       
        let updatedItem;
        let updatedItems;
        if(exstingCartItem)
          {
        
        updatedItem={
            ...exstingCartItem,
            amount:exstingCartItem.amount+action.item.amount
        }
        updatedItems=[...state.items]
        updatedItems[extstingCartItemIndex]=updatedItem;
    }
    else{
     
        updatedItems=state.items.concat(action.item);
   
    }
      
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        };
    }
    if(action.type=='REMOVE')
    {
       const extstingCartItemIndex = state.items.findIndex(
         (item) => item.id === action.id
       ); 
         const exstingCartItem = state.items[extstingCartItemIndex];
         const updatedTotalAmount =
           state.totalAmount - exstingCartItem.price;
           let updatedItems;
           if(exstingCartItem.amount===1)
           {

                updatedItems=state.items.filter((item)=>item.id!==action.id);
           }
           else{
                const updatedItem={...exstingCartItem,amount:exstingCartItem.amount-1}
                updatedItems=[...state.items];
                updatedItems[extstingCartItemIndex]=updatedItem;
           }
           return {
               items:updatedItems,
               totalAmount:updatedTotalAmount
           }

    }
   return defaultCartState;
 };

const CartProvider=props=>{
   const [cartState,disptachCartAction]=useReducer(cartReducer,defaultCartState);
    const AddItemToCartHandler=item=>{
        disptachCartAction({
            type:'ADD',item:item
        })
    }
    const removeItemToCartHandler=item=>{
        disptachCartAction({
            type:'REMOVE',id:item
        })

    }
    const cartContextHelper={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:AddItemToCartHandler,
        removeItem:removeItemToCartHandler
    }
   return<CartContext.Provider value={cartContextHelper}>
        {props.children}
    </CartContext.Provider>

}
export default CartProvider;