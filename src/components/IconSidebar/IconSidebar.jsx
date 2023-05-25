import React from 'react'
import { styled } from 'styled-components'
import { Link } from "react-router-dom";

export const IconSidebar = ({link,active,image,iconname}) => {
  
    const IconSidebarWrapper=styled.div`
    display: flex;
    align-items:center;
    /* justify-content: center;  */
    margin-left:60px;
    margin-bottom:0;
    height:40px;
    img{
      width: 20px;
      height: 20px;
    }
    p{
      display: flex;
      color:${(props)=>props.active?"#5429FF":"#7A797D"};
      font-weight:700;
      height: 20px;
      align-items:center;
      justify-content:center;
      cursor: pointer;
    }
    span{
      margin-left:10px;
      height: 20px;
      line-height:20px;
    }
   ` 
  return (
    <IconSidebarWrapper active={active}>
      <Link style={{ textDecoration: 'none' }} to={link}>

        <p><img src={image} alt="" /> <span>{iconname}</span></p>
      </Link>
    </IconSidebarWrapper>
  )
  
}

