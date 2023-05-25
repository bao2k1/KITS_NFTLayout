import React from 'react'
import { styled } from "styled-components"
import BannerImg from "../../assets/img/banner.svg"
import { ButtonNoIcon } from '../Button/ButtonNoIcon'
export const Banner = () => {
  
    const BannerWrapper=styled.div`
    display: flex;
    flex-direction:column;
    /* justify-content:center; */
    /* align-items:center; */
    background:url(${BannerImg}) no-repeat;
    background-size:cover;
    height: 100%;
    width: 100%;
    border-radius:20px;
    overflow: hidden;
    h1{
        width: 536px;
        height: 130px;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 54px;
        line-height: 120%;
        padding-left:80px;
        padding-top:60px;
        /* or 65px */
        letter-spacing: 0.02em;
        color: #FFFFFF;
        /* Inside auto layout */
    }
    .btn-banner{
        display: flex;
        flex-direction:row;
        padding-left:80px;
        .btn-2{
            background-color:transparent;
            border:1px solid #fff;
            margin-left:20px;
        }
    }
   ` 
  return (

        <BannerWrapper>
            <h1>Discover, Create and Sell Your Own NFT.</h1>
            <div className="btn-banner">
                <ButtonNoIcon textColor={"#721FDA"} borderRadius={40}>Discover</ButtonNoIcon>
                <ButtonNoIcon className="btn-2" textColor={"#fff"}  borderRadius={40}>Create</ButtonNoIcon>
            </div>
        </BannerWrapper>
  )
}
