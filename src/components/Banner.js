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

                <CircleButton>
                    <FaPlay/>
                </CircleButton>
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
`;
const RightBox = styled.div`
width: 50%;
padding: 0px 100px;
`;

const CircleButton = styled.button`
outline: none;
background-color: red;
color: white;
width: 80px;
height: 80px;
border-radius: 50%;
border: none;
margin-left:100px;
margin-top: 100px;

`;
