import React from 'react'
import { styled } from 'styled-components'
import searchIcon from "../../assets/img/search.svg"
import TheMan from "../../assets/img/theman.svg"
import Bell from "../../assets/img/bell.svg"
const HeaderWrapper=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:var(--header-bg-color);
    height: 80px;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 10;
    .search{
      position: relative;
      flex:1;
      input{
      width: 50%;
      height: 50px;
      margin-left:40px;
      border-radius: 24px;
      border: none;
      outline: none;
      padding: 0 60px;
      font-size: 14px;
    }
  }
  .search::before{
    
    content: '';
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 12px;
    left: 56px;
    width: 30px;
    height: 26px;

  }
    
    .avatar-part{
      flex:1;
      display: flex;
      justify-content:end;
      .circle{
        height:56px;
        background-color:#fff;
        border-radius:50%;
        width:56px;
        margin-right:40px;
        display:flex;
        justify-content:center;
        align-items:center;
      }
    }
   ` 
export const Header = () => {
    
  return (
    <HeaderWrapper>
        <div className="search">

        <input type="text" placeholder='Search Item, Collection and Account' />
        </div>
        <div className="avatar-part">
          <div className="circle">
          <img src={Bell} alt="" />
          </div>
          <div className="circle">
            <img src={TheMan} alt="" />
          </div>
        </div>
    </HeaderWrapper>
  )
}
