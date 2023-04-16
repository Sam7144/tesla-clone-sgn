import React from "react";
import styled from "styled-components";
//import Section from "./Section";
function HomeScreen({data}) {
  return (
    
      
        <Container>
          {data.map((props)=>(
            <div key={props.name}>
              <Wrap bgImage={props.image}>
             
              <ItemText>
                <h1>{props.name}</h1>
               <p>{props.description}</p>
              </ItemText>
              
             <Buttons>
              
                <ButtonGroup>
                  <ButtonLeft>{props.leftBtn}</ButtonLeft>
                  {props.RightBtn&&
                  <ButtonRight>
                    <a href={`/model/${props.slug}`}>
                      {props.RightBtn}
                      </a>
                    </ButtonRight>
                  }
                </ButtonGroup>
           
                <DownArrow src="./images/down-arrow.svg" alt='arrow-down'/>
             </Buttons>
            </Wrap>
            </div>
          ))}
        </Container>

      
    
  );
}

export default HomeScreen;
export const Container = styled.div`
  
`;
export const Wrap = styled.div`
  width: 100%;
  height: 120vh;
  background-repeat: no-reapeat;
  background-size: cover;
  background-position: center;
 // background-image: url(./images/model-s.jpg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image:${prop=>`url("${prop.bgImage}")`}

`;
export const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom:30px;
  //margin-top: 210px;
  @media (max-width:50em){
    flex-direction:column;
  }

`;
export const ButtonLeft = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  height: 40px;
  width: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
export const ButtonRight = styled(ButtonLeft)`
background:white;
color:black;
opacity:0.65;
`;
export const DownArrow = styled.img`
  height: 40px;
  overflow-x:hidden;
  margin-inline:auto !important;
  //transform:translateX(50%)
  animation:animateDown infinite 1.5s;
  margin-bottom:20px;
  display:flex;
`;
export const Buttons = styled.div`
height:auto;
overflow-y:hidden;
`
;


