import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
function modelst({ datta,id }) {
  console.log(id);
  const router=useRouter()
  if(id==="roof"){
    router.push('/roof')
  }
  return (
    <Container>
      <Wrap bgImage={datta.image}>
        <ItemText>
          <h1>{datta.name}</h1>
          <h3>{datta.title}</h3>
        </ItemText>
        <Buttons>
          <ItemSpeed>
            <Speed>
              <p>{datta.speed.start}</p>
              <p>{datta.speed.second}</p>
              <p>{datta.speed.third}</p>
              <p>{datta.speed.fourth}</p>
            </Speed>
            <Miles>
              <p>{datta.miles.start}</p>
              <p>{datta.miles.second}</p>
              <p>{datta.miles.third}</p>
              <p>{datta.miles.fourth}</p>
            </Miles>
          </ItemSpeed>
          <ButtonGroup>
            <ButtonLeft>
              <a href={`/cars/${datta.slug}`}>{datta.leftBtn}</a>
            </ButtonLeft>
            
          </ButtonGroup>
        </Buttons>
      </Wrap>
      <Interior bgImage={datta.interior}>
        <InteriorText>
          <h3>{datta.description}</h3>
        </InteriorText>
      </Interior>
      <Connect>
        <ConnectFirst>
          <FirstConnect>
            <Image
              src={datta.msinterior}
              width={700}
              height={250}
              alt="interior"
            ></Image>
            <Text>
              <h4>{datta.connect}</h4>
              <p>{datta.connectdes}</p>
            </Text>
          </FirstConnect>
          <SecondConnect>
            <Text>
              <h4>{datta.sound}</h4>
              <p>{datta.sounddes}</p>
            </Text>
            <video
              src={datta.video1}
              width="600"
              height="300"
              autoPlay
              loop
            ></video>
          </SecondConnect>
          <ThirdConnect>
            <Image
            className='img'
              src={datta.bikepark}
              width={700}
              height={250}
              alt="paark"
            ></Image>
            <Text>
              <h4>{datta.room}</h4>
              <p>{datta.roomp}</p>
            </Text>
          </ThirdConnect>
        </ConnectFirst>
      </Connect>
      <Power bgImage={datta.speedtest}>
        <PowerAll>
          <PoweSpeed>
            <p>{datta.performanceSpeed.start}</p>
            <p>{datta.performanceSpeed.second}</p>
            <p>{datta.performanceSpeed.third}</p>
          </PoweSpeed>
          <PowerMiles>
            <p>{datta.performancemiles.start}</p>
            <p>{datta.performancemiles.second}</p>
            <p>{datta.performancemiles.third}</p>
          </PowerMiles>
        </PowerAll>
      </Power>
      <PlaidContainer>
        <Plaid>
          <p>{datta.ludicrous}</p>
        </Plaid>
      </PlaidContainer>
      <ElectricPowerTrain>
        <Electric>
          <h1>{datta.train}</h1>
          <p>{datta.powertrain}</p>
        </Electric>
      </ElectricPowerTrain>
      <Wheels>
        <Wheel bgImage={datta.motor}></Wheel>
      </Wheels>
      <Exterior bgImage={datta.exterior}></Exterior>
      <ExteriorDes>
        <ExteriorWidth>
        <ExteriorInner>
          <Exteriorleft>
            <h2>Exterior</h2>
            <h1>Designed for Efficiency</h1>

            <p><a href={`/cars/${datta.slug}`}>Order Now</a></p>
            
          </Exteriorleft>
          <ExteriorRight>
            <p>
              With a drag coefficient of just .208 Cd, the lowest on the planet,
              Model S is built for speed, endurance and range. Improved
              aerodynamics and a wider chassis offer more responsive performance
              so you can take corners quicker and with more confidence.
            </p>
          </ExteriorRight>
        </ExteriorInner>
        </ExteriorWidth>
        <ExteriorSecond>
            <ExteriorText>
                <h3>Relentless Performance</h3>
            <p>Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.</p>

            </ExteriorText>
            <ExteriorImage src={datta.exteriora} alt='e-a'/>
        </ExteriorSecond>
        <ExteriorSecond>
          <ExteriorImage src={datta.exteriorb} alt='e-b'/>
            <ExteriorText>
              <h3>Optimized Aerodynamics</h3>
              <p>Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.</p>
            </ExteriorText>
        </ExteriorSecond>
        <ExteriorSecond>
        <ExteriorText>
              <h3>Refined Styling</h3>
              <p>An iconic silhouette meets refreshed, elegant proportions.</p>
            </ExteriorText>
          <ExteriorImage src={datta.exteriorc} alt='e-c'/>
        </ExteriorSecond>
      </ExteriorDes>
      <Range>
        <RangeVideo>
          <Video src={datta.vid2} autoPlay loop muted></Video>
        </RangeVideo>
      </Range>
    </Container>
  );
}
export const Container = styled.div`
  height: 100%;
`;
export const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-reapeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(prop) => `url("${prop.bgImage}")`};
`;
export const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  p {
    font-weight: 600 !important;
  }
`;
export const ItemSpeed = styled.div``;
export const Speed = styled.div`
  display: flex;
  justify-content:center;
  font-weight: 600;
  p {
    color: white;
    margin-inline-start: 100px;
  }
  @media (max-width: 50em) {
   p{ margin-inline-start:30px;
    font-weight:100;
   }
  }
`;
export const ItemMiles = styled.div``;
export const Miles = styled(Speed)`
  margin-block-start: 15px;
  font-weight: 300;
  p {
    margin-inline-start: 70px;
  }
  @media (max-width: 50em) {
    p{ margin-inline-start:20px;
     font-weight:5;
     font-weight:100;
     font-size:0.7rem;
    }
   }
`;
export const ButtonGroup = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  //margin-top: 210px;
  @media (max-width: 50em) {
    flex-direction: column;
    // justify-content:center;
    flex-wrap:wrap;
    align-items:center;
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
  background: white;
  color: black;
  opacity: 0.65;
`;
export const Buttons = styled.div``;
export const Interior = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height:100vh;
  background-repeat: no-reapeat;
  background-size: cover;
  background-position: center;
  background-image: ${(prop) => `url("${prop.bgImage}")`};
`;
export const InteriorText = styled.div`
  margin-top: 50px;
  h3 {
    font-weight: 700;
    color: white;
  }
`;
export const Connect = styled.div`
  width: 100%;
  padding-top: 50px;
  background-color: black;
`;
export const ConnectFirst = styled.div`
  max-width: 1000px;
  margin-inline: auto;
`;
export const FirstConnect = styled.div`
  padding-bottom: 50px;
  @media (max-width: 49.98em) {
    img {
      width: 100%;
    }
  }
  @media (min-width: 50em) {
    display: flex;
    align-items: center;
    gap: 50px;
  }
`;
export const IMage = styled.img``;
export const Text = styled.div`
padding-block:20px;h4{
  padding-block-end:10px;
}

`;
export const SecondConnect = styled.div`
  padding-bottom: 50px;
  @media (max-width: 49.98em) {
    video {
      width: 100%;
    }
  }
  @media (min-width: 50em) {
    display: flex;
    align-items: center;
    gap: 50px;
  }
`;
export const ThirdConnect = styled.div`
  padding-bottom: 50px;
  @media (max-width: 49.98em) {
    img {
      width: 100%;
    }
  }
  @media (min-width: 50em) {
    display: flex;
    align-items: center;
    gap: 50px;
  }
`;
export const ConnectVideo = styled.video``;
export const Power = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 500px;
  background-repeat: no-reapeat;
  background-size: cover;
  background-position: center;
  background-image: ${(prop) => `url("${prop.bgImage}")`};
`;
export const PowerAll = styled.div`
  margin-bottom: 50px;
`;
export const PoweSpeed = styled.div`
  display: flex;
  justify-content: center;
  p {
    color: white;
    margin-inline-start: 130px;

  }
`;
export const PowerMiles = styled.div`
  display: flex;
  justify-content: center;
  p {
    color: white;
    margin-inline-start: 130px;
    font-weight:100;
    font-size:0.7rem;

  }
`;
export const PlaidContainer = styled.div`
  background-color: white;
`;
export const Plaid = styled.div`
  height: 300px;
  max-width: 1000px;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: black;
    text-align: center;
  }
`;
export const ElectricPowerTrain = styled.div`
  background-color: white;
`;
export const Electric = styled.div`
  height: 300px;
  max-width: 1000px;
  margin-inline: auto;
  p {
    color: black;
  }
  @media(max-width:50em){
    text-align:center;
  }
`;
export const Wheels = styled.div``;
export const Wheel = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-inline: auto;
  height:80vh;
  background-repeat: no-reapeat;
  background-size: cover;
  background-position: center;
  background-image: ${(prop) => `url("${prop.bgImage}")`};
  border-radius: 10px;
  @media(max-width:50em){
    background-size:cover;
    background-repeat:no-repeat;
    height:300px;
    padding-inline:10px;
  }
`;
export const Exterior = styled.div`
  width: 100%;
  height: 60vh;
  background-repeat: no-reapeat;
  background-size: cover;
  background-position: center;
  background-image: ${(prop) => `url("${prop.bgImage}")`};
`;
export const ExteriorDes = styled.div`
  background-color: black;
  padding-top:50px;
`;
export const ExteriorWidth=styled.div`
max-width: 1000px;
  margin-inline: auto;
`
export const ExteriorInner = styled.div`
  @media (min-width: 41em) {
    display: flex;
    justify-content: space-between;
  }
`;
export const Exteriorleft = styled.div`
height:240px;
h1{
    margin-bottom:10px;

}
h1,h2{
    color:white;
}
p{
    margin-bottom:10px;
    height: 40px;
    width: 200px;
    border: 2px solid white;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    a{
        color:white;
    }
}
@media(max-width:50em){
  text-align:center;
  p{
    margin-inline:auto;
  }
}
  }
  @media (min-width: 41em) {
    width: 40%;
  }
`;
export const ExteriorRight = styled.div`
p{
    color:white;
    margin-block-end:20px;
}
  @media (min-width: 41em) {
    width: 60%;
  }
  @media(max-width:50em){
    text-align:center;
    p{
      margin-inline:auto;
    }
  }
`;
export const ExteriorSecond=styled.div`
max-width:1000px;
margin-inline:auto;
height:500px;
width:100%;
@media (min-width: 41em) {
    display:flex;
    justify-content:space-between;
  }
`
export const ExteriorText=styled.div`
padding-inline:30px;
@media (min-width: 41em) {
    width:40%;
  }
`
export const ExteriorImage=styled.img`
height:300px;
@media (min-width: 41em) {
    width:60%;
  }
`
export const Range=styled.div`
padding-block:50px;
`
export const RangeVideo=styled.div`
max-width:1300px;
margin-inline:auto;
`
export const Video=styled.video`
width:100%;
height:500px;
`
export default modelst;
export async function getStaticPaths() {
  const { all } = await import("../../components/data/data.json");
  const allpaths = all.map((path) => {
    return {
      params: {
        cat: path.slug.toString(),
        // id:path.name
      },
    };
  });
  return {
    paths: allpaths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const id = context.params.cat;
  const { all } = await import("../../components/data/data.json");
  const Data = all.find((ev) => id === ev.slug);
  return {
    props: { datta: Data ,
    id},
  };
}
