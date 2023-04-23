import React from 'react'
import styled from 'styled-components';

export default function H1({children}) {
  return (
    <Title>{children}</Title>
  )
}

const Title = styled.h1`
font-size: 60px;
color: white;
text-transform:uppercase;
`;