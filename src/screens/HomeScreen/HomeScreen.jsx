import React from 'react'
import  Home  from "../../components/Home/Home"
import MainLayout from 'Layout/MainLayout'
import { Route, Routes } from 'react-router-dom'
import Market from 'components/Market'

const HomeScreen = () => {
   
  return (
    <MainLayout>
              <Routes>
                 <Route exact path="/" element={<Home />} />
                 <Route path="/market" element={<Market />} />
               
               </Routes>
    </MainLayout>
  )
  
}
export default HomeScreen
