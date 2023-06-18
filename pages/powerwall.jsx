import React from 'react'
import styled from 'styled-components'
function powerwall() {
  return (
    <Container>

        <Wrap>
          <HeaderContainer>
            <h1>PowerWall</h1>
            <EnergyWrap>
            <EnergyProp>
              <p>Backup Energy Storange</p>
              <p>outrange protection</p>
              <p>Energy Independence</p>
              <p><a href='/design/powerwall'>Order now</a></p>
            </EnergyProp>
            <DownArrow src="./images/down-arrow.svg" alt='arrow-down'/>
            </EnergyWrap>
          </HeaderContainer>
       </Wrap>
       <WrapDes>
        <WrapContainer>
          <p>Use stored energy to power<br/>
            your home during an outage</p>
          <p>
          Recharge with solar energy<br/>
          you produce
            </p> 
            <p>Keep appliances running<br/>
             seamlessly </p>
        </WrapContainer>
       </WrapDes>
       <TextPower>
        <Text>
          <p>
          Powerwall is an integrated battery system that stores your solar energy for backup protection, so when the grid goes down your power stays on. Your system detects outages and automatically
           recharges with sunlight to keep your appliances running for days
          </p>
        </Text>
       </TextPower>
       <BackUp>
        <BackUpContainer>
          <p>
          All Tesla solar systems integrate with Powerwall, a compact home battery that reduces your reliance on the grid by storing your solar energy for use when the sun isn’t shining. You can add additional Powerwall units to your order to further lower your carbon footprint and to prepare your home for power outages. Chat with an energy advisor to ask any questions about Tesla solar and Powerwall.
          </p>
          <Video src='/images/powerwall3.mp4' autoPlay muted></Video>
        </BackUpContainer>
       </BackUp>
       <Modern>
        <ModernContainer >
          <h3>Customize settings<br/>for personalized savings</h3>
          <h3>Stay connected with instant<br/>
alerts before severe weathe</h3>
          <h3>Manage your energy</h3>
        </ModernContainer>
       </Modern>
       <Final>
        <FinalText>
          <p>With the Tesla app, you can monitor your solar energy in real time. Set your preferences to optimize for energy independence, outage protection or savings. Control 
            your system from anywhere with remote access and instant alerts.</p>
          <p><a href='/design/powerwall'>Order Now</a></p>  
        </FinalText>
       </Final>
    </Container>
  )
}

export default powerwall
export const Container=styled.div`
color:white !important;
`
export const Wrap=styled.div`
background-image:url(/images/powerwall1.jpg);
background-repeat:no-repeat;
background-size:cover;
background-position:center;
width:100%;
height:100vh;
`
export const HeaderContainer=styled.div`
max-width:1000px;
margin-inline:auto;
margin-block-start:50px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
height:90vh;
h1{
  color:white;
}
`
export const EnergyWrap=styled.div``
export const EnergyProp=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
gap:30px;
height:100px;
p{
  height:60px;
  display:flex;
  align-items:center;
  justify-content:center;
}
p,a{
  color:white;
}
a{
  border:2px solid white;
  padding-inline:20px;
  padding-block:10px;
}
@media (max-width:700px){
  display:flex;
  flex-direction: column;
  align-items:center;
  height:auto;
  justify-content:space-between;
  p{
    height:auto;
  }
}

`
export const DownArrow = styled.img`
  height: 40px;
  overflow-x:hidden;
  margin-inline:auto !important;
  //transform:translateX(50%)
  animation:animateDown infinite 1.5s;
  margin-bottom:20px;
  display:flex;
`;
export const WrapDes=styled.div`
background-image:url(/images/powerwall2.webp);
background-repeat:no-repeat;
background-size:cover;
background-position:center;
width:100%;
height:70vh;
display:flex;
flex-direction:column;
justify-content:flex-end;
`
export const WrapContainer=styled.div`
max-width:1000px;
margin-inline:auto;
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
gap:30px;
padding-block-end:100px;
p{
  color:white;
  text-align:center;
}
`
export const TextPower=styled.div`
background-color:white;
height:50vh;
display:flex;
flex-direction:column;
justify-content:center;
`
export const Text=styled.div`
max-width:1000px;
margin-inline:auto;
p{
  text-align:center;
}
`
export const BackUp=styled.div`
background-color:black;
height:100vh;
`
export const BackUpContainer=styled.div`
max-width:1000px;
margin-inline:auto;
p{
  margin-block:70px;
  text-align:center;
}

`
export const Video=styled.video`
width:100%;
`
export const Modern=styled.div`
height:80vh;
background-image:url(/images/powerwall4.jpg);
background-repeat:no-repeat;
background-size:cover;
background-position:center;
`
export const ModernContainer=styled.div`
margin-block-start:50px;
h3{
  color:white;
  padding-block-end:60px;
  padding-inline-start:50px;
  font-weight:100;
}

`
export const Final=styled.div`
background-color:white;
height:50vh;
display:flex;
flex-direction:column;
justify-content:center;
`
export const FinalText=styled.div`
max-width:1000px;
margin-inline:auto;
p{
text-align:center;
height:100px;
display:flex;
  align-items:center;
  justify-content:center;
a{
  border:2px solid blue;
  padding-inline:20px;
  padding-block:10px;;
}
`