import React from 'react'
import { styled } from 'styled-components';
import Etherum from "../../assets/img/Ethereum-blue.svg"
const Title = styled.h1`
font-size:14px;
font-weight:700;
color:#747475;
margin:0;
`;
const WrapperCard = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
padding: 10px 20px;
/* width: 80%; */
height: 167px;
background: #fff;
border-radius: 12px;

p{  text-align:center; 
    font-size:30px;
    font-weight:700;
    color:#000;
    margin:12px 0;

}
span{
    font-size:16px;
    font-weight:400;
    color:#333030;
}


`
const ChildrenWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Card = ({ title, soluong, donvi, children }) => {
  return (
    <WrapperCard>
      <Title>{title}</Title>
      <p><img src={donvi === "ETH" ? Etherum : ""} alt="" />{donvi === "ETH" ? soluong.toFixed(2) : `+${soluong.toFixed(2)}`} <span>{donvi}</span></p>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </WrapperCard>
  )
}
