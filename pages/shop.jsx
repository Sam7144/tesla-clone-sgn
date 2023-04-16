import React from 'react'
import styled from 'styled-components'
function shop() {
  return (
    <MessageParent>
        <Message>
            <h1>sorry the page is not currntly available</h1>
        </Message>
    </MessageParent>
  )
}

export default shop
export const MessageParent=styled.div`
background-color:black;
`
export const Message=styled.div`
max-width:1000px;
margin-inline:auto;
width:100%;
height:100vh;
diplay:flex;
padding-top:300px;
justify-content:center;
align-items:center;
h1{
  color:red;
}
`