import React from 'react'
import { Header } from "../../components/Header/Header"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import  Market  from "../../components/Market/Market"
import { styled } from 'styled-components'
const MarketScreen = () => {
   const MarketScreenWrapper=styled.div`
    display: flex;
    .homescreen-left{
        flex:20% ;
    }
    .homescreen-right{
        flex:80%;
        overflow-y: scroll;
    }
   ` 
  return (
    <MarketScreenWrapper>
    <div className='homescreen-left'>

      <Sidebar />
    </div>
    <div className='homescreen-right'>

      <Header />
      <Market />
    </div>
    </MarketScreenWrapper>
  )
}
export default MarketScreen
