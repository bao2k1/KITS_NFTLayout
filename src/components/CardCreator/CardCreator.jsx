import React, { useState } from 'react'
import { styled } from 'styled-components'
import { ButtonNoIcon } from 'components/Button'
export const CardCreator = ({username,fullname,rate,avatar}) => {
    const CreatorWrapper=styled.div`
    height: auto;
    display: flex;
    align-items:center;
    margin-bottom:16px;
    .rate{
        font-weight:700;
        font-size:20px;
        margin-right:16px;
    }
    img{
        width: 50px;
        height: 50px;
        margin-right:16px;
    }
    .name-part{
        display: flex;
        flex-direction: column;
        line-height:30px;
        .fullname{
            font-weight:600;
            font-size:16px;
        }
        /* align-items: start; */
        /* justify-content: start; */
    }
    .btn{
        margin-left:auto;
    }
    `
    const [followed,SetFollowed]=useState(false);
    const followHandler=()=>{
        SetFollowed(!followed);
        console.log(followed);
    }
  return (
   <CreatorWrapper>
        <span className='rate'>{rate}.</span>
        <img src={avatar} alt="" />
        <div className="name-part">
            <span className='fullname'>{fullname}</span>
            <span>{username}</span>
        </div>
        <ButtonNoIcon onClick={()=>followHandler()} className="btn" fontsize={12} textColor={followed ? '#FFFFFF' : '#5429FF'} height={40} width={80} bgColor={followed ? '#5429FF' : '#EEEAFF'} borderRadius={"20"} borderColor={"#EEEAFF"}>{followed ? 'Following' : 'Follow'}</ButtonNoIcon>
   </CreatorWrapper>
  )
}
