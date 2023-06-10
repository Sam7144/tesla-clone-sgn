import Image from 'next/image'
import React from 'react'
import { removeItem,increase,decrease } from '@/features/cartSlice'
import { useDispatch } from 'react-redux'
function CartItem({id,name,price,amount,img}) {
  const dispatch=useDispatch();
  return (
    <div>
        <Image src={img} width={200} height={200} alt={name}/>
        <div>
          <h4>{name}</h4>
          <h4>{price}</h4>
          <button onClick={()=>dispatch(removeItem(id))}>remove</button>
        </div>
        <div>
          <button onClick={()=>dispatch(increase({id}))}>up</button>
          <p>{amount}</p>
          <button onClick={()=>{
            if(amount===1){
              dispatch(removeItem(id))
            }
            dispatch(decrease({id}))}}>down</button>
        </div>
    </div>
  )
}

export default CartItem