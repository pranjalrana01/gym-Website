import React from 'react'
import H1 from './reusable/H1'
import styled from 'styled-components'
import Button from './reusable/Button'
import bg from "../assets/img_1.jpg"
import WithBarTitle from './reusable/WithBarTitle'
import {FaPlay} from "react-icons/fa";
export default function Banner() {
  return (
    <div>
        <Container>
            <RightBox>
                <WithBarTitle title="with PRANJAL RANA"/>
                <H1>Build perfect body shape for good and healthy life.</H1>
                <Button>became a member</Button>
            </RightBox>
            <LeftBox>
                <Circle>
                <CircleButton>
                    <FaPlay/>
                </CircleButton>
                </Circle>
            </LeftBox>
        </Container>
    </div>
    
  )
}


const Container = styled.div`
width: 100%;
height: 100vh;
background-image: url(${bg});
background-attachment: fixed;
background-repeat: no-repeat;
background-size: cover;

display: flex;
flex-direction: row;
align-items: center;
`;

const LeftBox = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: flex-end;

`;
const RightBox = styled.div`
width: 50%;
padding: 0px 100px;
`;

const Circle = styled.div`
border: 3px solid red;
width: 100px;
height: 100px;
border-radius: 50%;
margin-right: 120px;
padding: 2px;
`;
const CircleButton = styled.button`
outline: none;
background-color: red;
color: white;
width: 100%;
height: 100%;
border-radius: 50%;
border: none;
cursor: pointer;

`;
