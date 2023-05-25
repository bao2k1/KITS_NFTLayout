import "../Button/Button.css"
import { styled } from "styled-components"

const ButtonWrapper = styled.button`
    display: flex;
    width: ${(props) => props.width + 'px'};
    height: ${(props) => props.height + 'px'};
    line-height: 46px;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.textColor};
    border: ${(props)=>props.borderColor?`1px solid ${props.borderColor}`:"none"};
    border-radius: ${(props) => props.borderRadius + 'px'};
    font-size:${(props) => props.fontsize + 'px'};
    font-weight: 600;
    /* text-transform: uppercase; */
    align-items:center;
    text-align:center;
    justify-content:center;
    cursor: pointer;
    img{
        width: 30px;
        height: 30px;
        margin-right:8px;
    }

`
 export const ButtonNoIcon = ({fontsize,bgColor,borderRadius,width,height,textColor,onClick,children,className,borderColor,imageBtn,...rest})=>{
   
    return <ButtonWrapper fontsize={fontsize} bgColor={bgColor} borderRadius={borderRadius} width={width} height={height} textColor={textColor} borderColor={borderColor} className={className} onClick={onClick} imageBtn={imageBtn} >
    {
          typeof(children)=="number"?`${Math.abs(children).toFixed(1)}%`:children
    }
    
    </ButtonWrapper>
}
ButtonNoIcon.defaultProps={
    borderColor:"#747475",
    textColor:"#747475",
    width:"115",
    height:"46",
}