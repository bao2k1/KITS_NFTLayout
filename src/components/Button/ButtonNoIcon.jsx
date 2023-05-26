import "../Button/Button.css"
import { styled } from "styled-components"

const ButtonWrapper = styled.button`
    display: flex;
    width: ${(props) => props.width + 'px'};
    height: ${(props) => props.height + 'px'};
    line-height: 46px;
    background-color: ${(props) => props.backgroundcolor};
    color: ${(props) => props.textcolor};
    border: ${(props)=>props.bordercolor?`1px solid ${props.bordercolor}`:"none"};
    border-radius: ${(props) => props.borderradius + 'px'};
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
 export const ButtonNoIcon = ({type,fontsize,backgroundcolor,borderradius,width,height,textcolor,onClick,children,className,bordercolor,...rest})=>{
   
    return <ButtonWrapper type={type} fontsize={fontsize} backgroundcolor={backgroundcolor} borderradius={borderradius} width={width} height={height} textcolor={textcolor} bordercolor={bordercolor} className={className} onClick={onClick}  >
    {
          typeof(children)=="number"?`${Math.abs(children).toFixed(1)}%`:children
    }
    
    </ButtonWrapper>
}
ButtonNoIcon.defaultProps={
    bordercolor:"#747475",
    textcolor:"#747475",
    width:"115",
    height:"46",
    backgroundcolor:"var(--btn-color)",
    type:"submit",
}