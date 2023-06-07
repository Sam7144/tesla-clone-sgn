import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import Image from 'next/image';
function Shop() {
  const {productCart}=useSelector(state=>state.cart);
  console.log(productCart)
  return (
   <div>
    <h1>hello</h1>
   </div>
  )
}

export default Shop
