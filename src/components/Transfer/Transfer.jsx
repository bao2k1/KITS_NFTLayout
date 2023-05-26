import React from 'react'
import { Button } from "../Button/Button";
import { transferData } from 'data/transferData';
import { Card } from "../Card/Card";
import { styled } from "styled-components"

const TransferWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; // Chia thành 2 cột bằng tỷ lệ 1:1
  grid-gap: 20px; // Khoảng cách giữa các hàng
  align-items:flex-start;
  width: auto;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: var(--transfer-bg-color);
  /* padding:20px; */
  margin-left:20px;
  margin-right:20px;

`
export const Transfer = () => {
  const data=transferData;
  return (
   <TransferWrapper>
    {data.map((data,i) =><Card key={i} title={data.title} soluong={data.soluong} donvi={data.donvi}>
        
        <Button bordercolor={"#ccc"}>{data.textBtn}</Button>
    </Card>)}
  </TransferWrapper>
  )
}
