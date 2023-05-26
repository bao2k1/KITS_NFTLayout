import React from 'react'
import { styled } from 'styled-components'
import { CardCreator } from 'components/CardCreator'
import Avatar from "../../assets/img/theman.svg"
const CreatorWrapper=styled.div`
background-color:var(--card-bg-color);
height: auto;
margin:30px 20px 0 20px;
padding:20px;
border-radius:20px;
color:var(--text-color);
.title{
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin-bottom:20px;
}
h2{
  margin:0;
}
` 
export const TopCreator = () => {
   
  return (
    <CreatorWrapper>
      <div className="title">
       <h2>Top Creator</h2>
       <p>See All</p>
      </div>
      
      <CardCreator avatar={Avatar} fullname={"Quang Bao"} username={"@bao2k1"} rate={1}/>
      <CardCreator avatar={Avatar} fullname={"SonTungMTP"} username={"@bao2k1"} rate={2}/>
      <CardCreator avatar={Avatar} fullname={"MoNo"} username={"@bao2k1"} rate={3}/>
      <CardCreator avatar={Avatar} fullname={"Justin BieBer"} username={"@bao2k1"} rate={4}/>
      <CardCreator avatar={Avatar} fullname={"Snoop Dog"} username={"@bao2k1"} rate={5}/>
      <CardCreator avatar={Avatar} fullname={"Trung Quan"} username={"@bao2k1"} rate={6}/>
      <CardCreator avatar={Avatar} fullname={"Bui Anh Tuan"} username={"@bao2k1"} rate={7}/>
    </CreatorWrapper>
  )
}
