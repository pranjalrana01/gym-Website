import React from 'react'
import styled from 'styled-components';

export default function Button({children}) {
  return (
    <BTN>{children}</BTN>
  )
}

const BTN = styled.button`
outline: none;
border: none;
text-transform: uppercase;
padding: 20px;
font-weight: 100;
background-color: red;
color: white;
cursor: pointer;
`;