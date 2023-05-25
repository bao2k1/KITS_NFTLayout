import React from 'react'
import { Button } from "../Button/Button";
import { transferData } from 'data/transferData';
import { Card } from "../Card/Card";
import { styled } from "styled-components"

const TransferWrapper = styled.div`
  display: flex;
  flex-wrap:2;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width: auto;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #CAEAE6;
  /* padding:20px; */
  .top{
    margin-bottom:30px;
  }
  .top,.bot{
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    
  }
`
export const Transfer = () => {
  const data=transferData;
  const dataTop= transferData.slice(0,2);
  const dataBot=transferData.slice(2,4);
  return (
   <TransferWrapper>
    <div className="top">
      {dataTop.map(data =><Card title={data.title} soluong={data.soluong} donvi={data.donvi}>
        
        <Button borderColor={"#ccc"}>{data.textBtn}</Button>
    </Card>)}
      {/* <Card title={"Revenue"} soluong={5.00} donvi={"ETH"}>
        
          <Button borderColor={"#ccc"}>{5.0}</Button>
      </Card>
      <Card title={"Spending"} soluong={2.00} donvi={"ETH"}>
          <Button borderColor={"#ccc"}>{2.0}</Button>
      </Card> */}
    </div>
    <div className="bot">

    {dataBot.map(data =><Card title={data.title} soluong={data.soluong} donvi={data.donvi}>
        
        <Button borderColor={"#ccc"}>{data.textBtn}</Button>
    </Card>)}
     {/* <Button width={30}></Button> */}
    </div>
  </TransferWrapper>
  )
}
