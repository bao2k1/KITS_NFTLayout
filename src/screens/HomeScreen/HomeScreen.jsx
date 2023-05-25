import React from 'react'
import { Header } from "../../components/Header/Header"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import  Home  from "../../components/Home/Home"
import { styled } from 'styled-components'
const HomeScreen = () => {
   const HomeScreenWrapper=styled.div`
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
    <HomeScreenWrapper>
    <div className='homescreen-left'>

      <Sidebar />
    </div>
    <div className='homescreen-right'>

      <Header />
      <Home />
    </div>
    </HomeScreenWrapper>
  )
}
export default HomeScreen
