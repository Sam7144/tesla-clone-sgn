import { createSlice } from '@reduxjs/toolkit'
import cartItems from '@/cartItems'
const initialState = {
  items:cartItems,
  amount:10,
  total:0
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      state.value += 1
    },
    increase:(state,{payload})=>{
      const cartItem=state.cartItem.find((item)=>item.id===payload.id);
      cartItem.amount+=1
    },
    decrease:(state,{payload})=>{
      const cartItem=state.cartItem.find((item)=>item.id===payload.id);
      cartItem.amount-=1
    },
    removeItem:(state,action)=>{
      const itemId=action.payload
      state.cartItems=state.cartItems.filter((itemid)=>
        itemid!==itemId
      )
    },
    calculateTotal:(state)=>{
      let total=0;
      let amount=0;
    
      state.amount=amount
      state.total=total
    }
  },
})
export const { increase,decrease,removeItem,calculateTotal } = cartSlice.actions

export default cartSlice.reducer