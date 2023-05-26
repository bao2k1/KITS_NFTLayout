import React from 'react'
import { styled } from 'styled-components'
import { Link } from "react-router-dom";
const IconSidebarWrapper=styled.div`
    display: flex;
    align-items:center;
    /* justify-content: center;  */
    margin-left:10px;
    margin-bottom:0;
    height:40px;
    img{
      width: 20px;
      height: 20px;
    }
    p{
      display: flex;
      color:${(props)=>props.active==="active"?"#5429FF":"var(--text-color)"};
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
export const IconSidebar = ({children,link,active,image,iconname}) => {
  
    
  return (
    <IconSidebarWrapper active={active}>
      {/* <Link style={{ textDecoration: 'none' }} to={link}> */}

        <p>
          {children}
          {/* <img src={image} alt="" />  */}
          <span>{iconname}</span>
          </p>
      {/* </Link> */}
    </IconSidebarWrapper>
  )
  
}

