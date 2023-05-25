import React, { useState } from 'react'
import { styled } from 'styled-components'
import { Col, Row } from 'antd';
import { Transfer } from 'components/Transfer';
import { Banner } from 'components/Banner';
import { TopCreator } from 'components/TopCreator';
import { CardTrend } from 'components/CardTrend';
import CardTrendImg from "../../assets/img/card-trend.svg"
import UserImg from "../../assets/img/theman.svg"
import { cardTrendData } from 'data/cardTrendData';
const HomeWrapper=styled.div`
    background-color:#CAEAE6;
    height: 100%;
    padding-left:40px;
    .title{
      align-items:center;
      padding:10px 0;
    }
    .icon-trend ul {
      display: flex;
      justify-content:end;
      .icon-trend-active{
        background: rgba(84, 41, 255, 0.1);
        color:rgba(84, 41, 255, 1)
      }
      li{
        padding:10px 20px;
        border-radius:20px;
        margin-left:20px;
        text-decoration:none;
        list-style:none;
        font-weight:500;
        color:#7A797D;
        cursor: pointer;
      }
    }
   ` 
 const Home = () => {
  
    const [activeTab, setActiveTab] = useState('Art');
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
    const data=cardTrendData;
    console.log(data);
  return (
    <HomeWrapper>
      <Row >
        <Col  span={16}>
          <Banner/>
        </Col>
        <Col  span={8}>
            <Transfer />
                  
        </Col>
        
      </Row>
      <Row >
        <Col  span={16}>
          <Row className='title'>
            <Col span={12}>
              <h1>Trending Auctions</h1>
            </Col>
            <Col span={12}>
              <div className="icon-trend">
                  <ul>
                    <li
                      className={activeTab === 'Art' ? 'icon-trend-active' : ''}
                      onClick={() => handleTabClick('Art')}
                    >
                      Art
                    </li>
                    <li
                      className={activeTab === 'Music' ? 'icon-trend-active' : ''}
                      onClick={() => handleTabClick('Music')}
                    >
                      Music
                    </li>
                    <li
                      className={activeTab === 'Collectibles' ? 'icon-trend-active' : ''}
                      onClick={() => handleTabClick('Collectibles')}
                    >
                      Collectibles
                    </li>
                    <li
                      className={activeTab === 'Utility' ? 'icon-trend-active' : ''}
                      onClick={() => handleTabClick('Utility')}
                    >
                      Utility
                    </li>
                  </ul>
              </div>
            </Col>
          </Row>
          <Row gutter={24}>
         
            {/* <Col className="gutter-row" span={12}>
              <CardTrend timeOclock={"12 : 03 : 45"} ethQual={9.10} bottomPara={"Bird Coin"} username={"@johnti60"} userImg={UserImg} CardTrendImg={CardTrendImg} nameCard={"Apple Coin"} likeNum={21.5}/>
            </Col>
            <Col className="gutter-row" span={12}>
            <CardTrend timeOclock={"12 : 03 : 45"} ethQual={2.16} bottomPara={"Bird Coin"} username={"@johnti60"} userImg={UserImg} CardTrendImg={CardTrendImg} nameCard={"Apple Coin"} likeNum={1.9}/>
            </Col> */}
            {data.map((item, index) => (
              <Col className="gutter-row" span={12} key={index}>
                <CardTrend
                  timeOclock={item.timeOlock}
                  ethQual={item.ethEqual}
                  bottomPara={item.bottomPara}
                  username={item.username}
                  userImg={item.userImg}
                  CardTrendImg={item.cardTrendImg}
                  nameCard={item.nameCard}
                  likeNum={item.likeNum}
                />
              </Col>
            ))}
          </Row>
          
        </Col>
        <Col  span={8}>
          <TopCreator/>
        </Col>
        
      </Row>
    </HomeWrapper>
  )
}
export default Home
