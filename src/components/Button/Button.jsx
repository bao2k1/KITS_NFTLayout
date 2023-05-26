import "../Button/Button.css"
import { styled } from "styled-components"
import ArrowUp from "../../assets/img/arrow-up.svg"
import ArrowDown from "../../assets/img/arrow-down.svg"

const ButtonWrapper = styled.button`
    display: flex;
    width: ${(props) => props.width + 'px'};
    height: ${(props) => props.height + 'px'};
    line-height: 46px;
    background-color: var(--card-bg-color);
    color: ${(props) => props.textcolor};
    border: ${(props)=>props.bordercolor?`1px solid ${props.bordercolor}`:"none"};
    border-radius: 14px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
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
 export const Button = ({width,height,textcolor,onClick,children,className,bordercolor,imagebtn,...rest})=>{
   
    return <ButtonWrapper width={width} height={height} textcolor={textcolor} bordercolor={bordercolor} className={className} onClick={onClick} imagebtn={imagebtn} ><img src={
        // children>0?ArrowUp:ArrowDown
        typeof(children)=="number"?(children>0?ArrowUp:ArrowDown):imagebtn
    } alt="" />
    {
          typeof(children)=="number"?`${Math.abs(children).toFixed(1)}%`:children
    }
    
    </ButtonWrapper>
}
Button.defaultProps={
    bordercolor:"#747475",
    textcolor:"var(--text-color)",
    width:"115",
    height:"46",
}
// import React from "react";
// class Button extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//     }
//     handleClick() {
//         this.props.onClick();
//     }
//     componentWillReceiveProps(){
//                 console.log("willreceiveprops:");
//             }
//     render() {
//         return (
//             <button className={this.props.className} onClick={this.handleClick}>
//                 {this.props.children}
//             </button>
//         );
//     }
// }
// export {Button}

