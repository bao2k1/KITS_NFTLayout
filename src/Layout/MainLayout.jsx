import React from 'react'
import { Header } from "../components/Header/Header"
import { Sidebar } from "../components/Sidebar/Sidebar"
import { styled } from 'styled-components'
const MainScreenWrapper=styled.div`
    display: flex;
    height: 100vh;
    overflow: hidden;
    .homescreen-left{
        flex:20% ;
    }
    .homescreen-right{
        flex:80%;
        overflow-y: auto;
    }
    .children-wrapper {
      height: auto;
      overflow-y: auto; /* Cho phép cuộn dọc */
    }
   ` 
const MainLayout = ({children}) => {
   
  return (
    <MainScreenWrapper>
    <div className='homescreen-left'>

      <Sidebar />
    </div>
    <div className='homescreen-right'>

      <Header />
      <div className='children-wrapper'>
        {children}
      </div>
    </div>

    </MainScreenWrapper>
  )
}

export default MainLayout;