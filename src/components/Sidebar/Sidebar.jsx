import React, { useState } from 'react'
import { styled } from 'styled-components'
import Logo from "../../assets/img/Logo.svg"
import IconDash from "../../assets/img/Icon1.svg"
import { IconSidebar } from '../IconSidebar'
import { Button } from '../Button/Button'
import LightModeIcon from "../../assets/img/light-mode.svg"
import DarkModeIcon from "../../assets/img/dark-mode.svg"
import IconMarket from "../../assets/img/market.svg"
import ETHBalance from "../../assets/img/ETH_balance.svg"
import PlusBalance from "../../assets/img/plus_balance.svg"
import ArrowRight from "../../assets/img/arrow-right.svg"
import { NavLink } from 'react-router-dom'
import {ReactComponent as MarketCustomIcon} from "../../assets/img/market.svg";
const SidebarWrapper=styled.div`
display: flex;
flex-direction:column;
height: 100%;
/* overflow: hidden; */
background-color:var(--body-background);

h1{ 
    margin-top:30px;
    margin-left:60px;
    width: 58px;
    height: 16px;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: var(--text-color);
}
    .logo-img{
        height: 56px;
        width: 100%;
        margin:20px 0px;
    }
    .change-mode{
        display: flex;
        align-items:center;
        justify-content:space-between;
        margin-bottom:60px;
        .change-mode-btn{
           
            display: flex;
            justify-content:center;
            align-items:center;
            height:auto;
            padding:0;
            background-color:var(--body-background);
            border:none;
            margin-right:50px;
            position:relative;
            label {
            width:80px;
            height:40px;
            position: relative;
            display: block;
            background-color: #ebebeb;
            border-radius: 200px;
            box-shadow: inset 0px 5px 15px rgba(0,0,0,0.4), inset 0px -5px 15px rgba(255,255,255,0.4);
            cursor: pointer;
            
        }
            label:after {
                content: "";
                width:30px;
                height: 30px;
                position: absolute;
                top:5px;
                left:6px;
                background-color:#fff;
                border-radius: 180px;
                box-shadow: 0px 5px 10px rgba(0,0,0,0.2);
                }
                input {
                width: 0;
                height: 0;
                visibility: hidden;
                }
                input:checked + label
                 {
                    background: #242424;
                    }
                input:checked + label:after
                {
                    left:74px;
                    transform: translateX(-100%);
                    background: linear-gradient(180deg,#777,#3a3a3a);
                    }
                 label,label:after {
                    transition: 0.3s
                    }
                label:active:after{ 
                        width: 70px; 
                        }
                .img-1{
                    cursor: pointer;
                    position: absolute;
                    left: 18px;
                    height: 20px;
                    width: 20px;
                }
                .img-2{
                    cursor: pointer;
                    position: absolute;
                    right: 12px;
                    height: 20px;
                    width: 20px;
                }
        }      
    }
    .balance{
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
        align-self: center;
        margin-top: 40px;
        width: 70%;
        height: 220px;
        border-radius:20px;
        color: #ffffff;
        background: linear-gradient(228.89deg, #5429FF 1.12%, #BBAAFF 100%);
        p{
            margin:0;
        }
        .balance-coin{
            display:flex;
            justify-content:center;
            margin-bottom:20px;
            span{
                margin-left:10px;
            }
        }
    }
    .icon{
        margin-left:60px;
    }
    .active{
        p{
            color:#5429FF;
        }
        .icon path{
    stroke:#5429FF;
}
        
    }
    .navlink{
        text-decoration:none;
        display:flex;
        align-items:center;
    }
    
    
` 
export const Sidebar = () => {
   
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setDarkMode =()=>{
    document.querySelector('body').setAttribute('data-mode', 'dark');
  }
  const setLightMode =()=>{
    document.querySelector('body').setAttribute('data-mode', 'light');
  }

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if(!isDarkMode) 
    setDarkMode();
    else
    setLightMode();
  };
  return (
    <SidebarWrapper>
        <img className='logo-img' src={Logo} alt="" />
        <NavLink className="navlink" to="/" activeClassName="active" >
            <MarketCustomIcon className='icon' stroke='red'/> 
            {/* <MarketCustomIcon className='icon' stroke='red'/> */}
             <IconSidebar  iconname="Dashboard" />
        </NavLink>
        {/* <IconSidebar    link={"/"}  image={IconDash} iconname={"Dashboard"}></IconSidebar> */}
        <NavLink className="navlink" to="/market" activeClassName="active" >
            <MarketCustomIcon className='icon' stroke='red'/>
            <IconSidebar iconname={"Market"}></IconSidebar>
        </NavLink>
        <NavLink className="navlink" to="/login" activeClassName="active" >
             <MarketCustomIcon className='icon' stroke='red'/>
             <IconSidebar  iconname={"Active Bids"}></IconSidebar>
        </NavLink>
        <h1>PROFILE</h1>
        <NavLink className="navlink" to="/d" activeClassName="active" >
             <MarketCustomIcon className='icon' stroke='red'/>
             <IconSidebar  iconname={"Active Bids"}></IconSidebar>
        </NavLink>
        <NavLink className="navlink" to="/c" activeClassName="active" >
             <MarketCustomIcon className='icon' stroke='red'/>
             <IconSidebar  iconname={"Active Bids"}></IconSidebar>
        </NavLink>
        <NavLink className="navlink" to="/e" activeClassName="active" >
             <MarketCustomIcon className='icon' stroke='red'/>
             <IconSidebar iconname={"Active Bids"}></IconSidebar>
        </NavLink>
        <NavLink className="navlink" to="/g" activeClassName="active" >
             <MarketCustomIcon className='icon' stroke='red'/>
             <IconSidebar  iconname={"Active Bids"}></IconSidebar>
        </NavLink>
        <NavLink className="navlink" to="/f" activeClassName="active" >
             <MarketCustomIcon className='icon' stroke='red'/>
             <IconSidebar iconname={"Active Bids"}></IconSidebar>
        </NavLink>
        
        <h1>OTHER</h1>
        <div className='change-mode'>

        <NavLink className="navlink" to="/h" activeClassName="active" >
             <MarketCustomIcon className='icon' stroke='red'/>
             <IconSidebar image={IconMarket} iconname={"Active Bids"}></IconSidebar>
        </NavLink>
            <button className='change-mode-btn'>
       
                
                <input type="checkbox" id="darkmode-toggle" checked={isDarkMode} onChange={handleToggleDarkMode} />
                <label htmlFor="darkmode-toggle"/>
                <img className="img-1" src={LightModeIcon} alt="" onClick={handleToggleDarkMode} />
                 <img className="img-2" src={DarkModeIcon} alt="" onClick={handleToggleDarkMode} />        
            </button>
        </div>
        <div className="balance">
            <p>Your balance</p>
            <h2>1,032.02</h2>
            <div className="balance-coin">
                <img src={ETHBalance} alt="" /> <span>ETH</span>
            </div>
            <Button width={"100%"} bordercolor={"#ccc"} imagebtn={PlusBalance}>
                Top up balance
                <img style={{ height:"20px" }} src={ArrowRight} alt="" />
            </Button>
        </div>

    </SidebarWrapper>
  )
}
