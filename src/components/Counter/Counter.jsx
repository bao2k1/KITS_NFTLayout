import { Button } from "../Button";
import { useState,useEffect } from "react";
import {styled} from "styled-components"

const Title=styled.h1`
font-size:1.5rem;
text-align:center;
color:red;
`;



const TitleStyled=styled(Title)`
    color:purple;
`


const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
  p{
    font-size:1rem;
    text-align:center;
    color:${(props)=>props.count>5?"red":"black"};
  }
  .button-count{
    background-color:blue;
  }
`;

export const Counter = ({name})=>{
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        // console.log("useEffect")
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[count])
        const increment = ()=>{
            setCount(count+1)
        }
        const decrement = ()=>{
            setCount(count-1)
        }
        
        // console.log("rerendering")
        return(
            <Wrapper className="count"  count={count}>
                {

                loading?<div>Loading...</div>:
                <>
                <Title>Counter of {name}</Title>
                <TitleStyled>Counter of {name}</TitleStyled>

                <p>Count: {count}</p>
                <Button className="button-count" onClick={()=>increment()}>+</Button>
                <Button className="button-count" onClick={()=>decrement()}>-</Button>
                </>
                }
            </Wrapper>
        )
}
// import React from "react"
// class Counter extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0,
//             loading:true
//         }
//     }
//     componentWillMount() {
        
//         console.log("willmount:", this.state.count);
//     }
//     componentDidMount() {
//         setTimeout(()=>{this.setState({loading:false})},2000)
//             console.log("didmount:", this.state.count);
//         }
//     componentWillReceiveProps(){
//         console.log("willreceiveprops:", this.state.count);
//     }
//     shouldComponentUpdate(nextProps,nextState){
//         console.log(nextState);
//         console.log(nextProps.name);

//         if(nextState.count >5)
//         {
//             return false;
//         }
//         if(nextProps.name ==="Bao2k1")
//         {
//             return false;
//         }
//         console.log("shouldupdate:", this.state.count);
//         return true;
//     }
//     componentWillUpdate(){
//         console.log("willupdate:", this.state.count);
//     }
//     componentDidUpdate(){
//         console.log("didupdate:", this.state.count);
//     }
//     componentWillUnmount(){
//         console.log("unmount:", this.state.count);
//         setTimeout(()=>{this.setState({loading:true})},7000)
//         }
//     increment = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }
//     decrement = () => {
//         this.setState({
//             count: this.state.count - 1
//         })
//     }
//     render() {
//         console.log("render",this.state.count)
//         return (
//             this.state.loading?<div>Loading</div>:
//             <>
//             <div>
//                 <h1>Counter {this.props.name}</h1>
//                 <p>Count: {this.state.count}</p>
//                 <Button onClick={this.increment}>+</Button>
//                 <Button onClick={this.decrement}>-</Button>
//                 {/* <Button onClick={this.decrement}>{this.state.count}</Button> */}

//             </div>
//             </>
//         )
//     }
// }
// export {Counter}