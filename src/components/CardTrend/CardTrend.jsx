import React from 'react'
import { styled } from 'styled-components'
import EthIcon from "../../assets/img/Ethereum-blue.svg"
import Clock from "../../assets/img/oclock.svg"
import { ButtonNoIcon } from 'components/Button'
export const CardTrend = ({timeOclock,ethQual,bottomPara,nameCard,likeNum,CardTrendImg,userImg,username}) => {
    const CardTrendWrapper=styled.div`
    display:flex;
    flex-direction:column;
    background-color: #fff;
    height: 360px;
    border-radius:20px;
    margin-bottom:20px;
    padding:20px;
    .image-trend{
        width:100%;
        height:60%;
        position:relative;
        /* background-color:red; */
        background-color: rgba(0, 0, 0, 0.95);
        border-radius:20px;
        .place-card{
            position:absolute;
            top:50%;
            left:50%;
            transform:translate(-50%, -50%);
            text-align:center;
            display:none;
        }
        img{
            border-radius:20px;
            width:100%;
            height:100%;
            object-fit:cover;
            opacity:0.95;
            transition: opacity 0.3s;
        }
        &:hover img{
            opacity:0.8;
        }
        .oclock{
            display:flex;
            flex-direction:row;
            align-items:center;
            position:absolute;
            bottom:10px;
            left:10px;
            height:28px;
            width:100px;
            border-radius:20px;
            background: rgba(22, 22, 22, 0.16);
            color:#fff;
                img{
                    height:20px;
                    width:20px;
                    margin-left:5px;
                }
        }
        
    }
    .image-trend:hover .place-card{
        display:block;
    }
    .name-card{
            display:flex;
            justify-content:space-between;
            align-items:center;
            p{
                font-weight:400;
            }
        }
        .user-card,
        .coin-card{
            display:flex;
            align-items:center;
            .eth-coin{
                display:flex;
                align-items:center;

            }
            img{
                height:30px;
                width:30px;
                margin-right:10px;
                
            }
        }
        .coin-card{
            justify-content:space-between
        }
   ` 
  return (
   
      <CardTrendWrapper>
        <div className="image-trend">
              <img  src={CardTrendImg} alt="" />
              <ButtonNoIcon textcolor={'#5429FF'} height={50} width={120} bgcolor={  '#EEEAFF'} borderradius={"40"} bordercolor={"#EEEAFF"} className='place-card'>Place A Bid</ButtonNoIcon>
                <div className="oclock">
                    <img src={Clock} alt="" />
                    <p>{timeOclock}</p>
                </div>
        </div>
            <div  className="name-card">
                <h3>{nameCard}</h3>
                <p>{likeNum.toFixed(1)}K Likes</p>
            </div>
            <div className="user-card">
                <img src={userImg} alt="" />
                <p>{username}</p>
            </div>
            <div className="coin-card">
                <p>{bottomPara}</p>
                <div className='eth-coin'>

                    <img src={EthIcon} alt="" />
                    <p>{ethQual.toFixed(2)} ETH</p>
                </div>
            </div>
      </CardTrendWrapper>
  )
}
