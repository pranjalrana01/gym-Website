import React from 'react'
import styled from 'styled-components';


export default function WithBarTitle({title}) {
  return (
    <Box>
        <Line/>
        <Title>{title}</Title>
    </Box>
    
  );
}

const Box = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;
const Line = styled.div`
width: 70px;
height: 2px;
background: red;
margin-right: 20px;
`;

const Title = styled.p`
color: red;
text-transform:uppercase;
`;