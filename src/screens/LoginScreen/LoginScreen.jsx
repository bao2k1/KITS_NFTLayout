import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Logo from "../../assets/img/Logo.svg"
import Person from "../../assets/img/person.svg"
import hidePass from "../../assets/img/clarity_eye-hide-line.svg"
import GoogleIcon from "../../assets/img/Google.svg"
import GithubIcon from "../../assets/img/Github.svg"
import FacebookIcon from "../../assets/img/Facebook.svg"
import {ButtonNoIcon} from "../../components/Button/ButtonNoIcon"
import { Button } from 'components/Button/Button'
const fakeData=[
    {
        id: 1,
        name: "John Doe",
        username: "kenaa@example.com",
        password: "123456789",
        role: "Admin",
        image: Person,
    },
    {
        id: 2,
        name: "QuangBao",
        username: "bao@gmail.com",
        password: "123456789",
        role: "Admin",
        image: Person,
    },
   
]
const errors={
    errorLogin: "Username or Password is invalid",
    // password: "Password is ",
};
const loginSuccess={
    message: "Login Successful",
    // password: "Password is ",
}

const LoginScreenWrapper=styled.div`  
    height: 100vh;
    /* padding: 70px 200px; */
    /* background: rgb(28,86,201); */
    background-image: linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%);
    .content{
        height:auto;
        transform:translateY(5%);
        width:70%;
    padding: 80px;
    border-radius: 20px;
    background-image: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(240, 171, 235) 46%, rgba(187, 170, 255, 0.5) 100%);
    margin: auto;
    display: flex;
    position: relative;
    /* width: 80%; */
}
.content-left{
    flex:50%;
    display: flex;
    flex-direction: column;
    }
.content-right{
    flex:50%;
}
.input_group_label{
    margin-bottom: 10px;
    min-width: 120px; 
     display: inline-block; 
  
}
.input_group{
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    .error-msg{  
        height:19px;
        color: red;
        margin-top:4px;
        margin-bottom: 0;
        padding:0;
        font-size:14px;
    }
}
.input_group_pass{
    position: relative;
}
.forgot-label{
    position: absolute;
    color: #494949;
    top:-20px;
    right: 28%;
}
.password_fill{
    display: flex;
}
.input_pass::before{
    content: "";
    display: inline-block;
    background: url(${hidePass}) center  no-repeat  transparent;
    
    height: 30px;
    width: 30px;
    position: relative;
    top:-6px;
    right: 40px;
}
.input_group input{
    height: 46px;
    width: 70%;
    border-radius: 5px;
    border: rgba(187, 170, 255, 0.5) solid 1px;
    padding-left: 10px;
    background-color: rgba(187, 170, 255, 0.5);;
    font-weight: 600;
}
.title-login{
    font-size: 40px;
    font-weight: 700;
}
.btn-regis{
   font-weight:500;
}
.btn-regis:hover{
    background-color: #3311b9;
    cursor: pointer;
}
.social{
    display: flex;
    justify-content: space-between;
    width: 72%;
    margin-top: 16px;
}
.social-btn{
text-align: center;
border: #5429FF solid 1px;
border-radius: 40px;
width: 125px;
height: 50px;
background-color: #fff;
cursor: pointer;
}
.social-btn:hover{
    transform: scale(1.1);
}
.para-with{
    /* margin-left: 150px; */
    color: #5429FF;
}
.signup{
    width: 70%;
    display: flex;
    justify-content: center;
 
}
.signup1{
    color: #494949;
    margin-right: 10px;
}
.signup2{
    color: #5429FF;
    cursor: pointer;
    
}
.box{
    position: absolute;
    top:0;
    right: 0;
    height: 100%;
    width: 30%;
}
.image{
    display: flex;
}

.person{
    position: absolute;
    bottom: 0;
    right: 200px;
    height: 100%;
}
.btn-form{
    width: 70%;
    text-align: center;
    display: flex;
    align-items:center;
    flex-direction:column;
    /* justify-content:center; */
}
    .success-login,
  .error-login{
    height: 21px;
    font-size:14px;
    margin-top:-20px;
    margin-bottom:6px;
  }  
  
   ` 
 const LoginScreen = () => {
    const [statusPass,setStatusPass]=useState(false);
    const [errorMessages,setErrorMessages]=useState("");
    const [isSubmitted,setSubmitted]=useState(false);
    const [usernameTerm, setUsernameTerm] = useState('')
    const [isUsernameValid, setIsUsernameValid] = useState(true);
  
    useEffect(() => {
    
        const delayDebounceFn = setTimeout(() => {
          console.log(usernameTerm)
          // Send Axios request here
            checkUserName();
        }, 1000)
    
        return () => clearTimeout(delayDebounceFn)
      }, [ usernameTerm]);
    // const renderError=(name)=>{
    //     name===errorMessages.name&&(
    //         <div className="error">{errorMessages.message}</div>
    //     )
    // }
   
    const hideOnHandler=()=>{
        setStatusPass(!statusPass);
       if(!statusPass) document.getElementById("password").setAttribute("type","text")
       else document.getElementById("password").setAttribute("type","password")
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=document.forms[0];
        var {username,password}=document.forms[0];
        const userData=fakeData.find((user)=>user.username===username.value)
        if (userData) {
            if (userData.password !== password.value) {
              setErrorMessages(errors.errorLogin);
              form.reset();
            } else {
              setSubmitted(true);
              form.reset();
            }
          } else {
            setErrorMessages(errors.errorLogin);
            form.reset();
          }
    }
    const checkUserName=()=>{
       
        setIsUsernameValid(isValidEmail(usernameTerm));
       
       
    }
    function isValidEmail(email) {
        // Biểu thức chính quy để kiểm tra định dạng email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Kiểm tra định dạng email bằng cách so sánh với biểu thức chính quy
        return emailRegex.test(email);
      }
      const handleUsernameChange = (e) => {
        setUsernameTerm(e.target.value);
      }; 
   
  return (
   <LoginScreenWrapper>
   
        <div className="content">
            <div className="content-left">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                
                <form onSubmit={handleSubmit}>
                    <h2 className="title-login">Login</h2>
                    <div className="input_group">
                        <label className="input_group_label " htmlFor="username">Username:</label>
                        <input onChange={handleUsernameChange} type="text" id="username" name="username" placeholder="username" required/>
                        {/* {renderError("username")} */}
                        {!isUsernameValid && usernameTerm.trim() !== '' ? <p className='error-msg'>Username có định dạng một email. Ex: example@ex.com</p>:<p className='error-msg'></p>}
                    </div>
                    <div className="input_group input_group_pass ">
                        <p  className="forgot-label">Forgot password?</p>
                        <label className="input_group_label " htmlFor="password">Password:</label>
                       <div className="password_fill">
                            
                           <input  type="password" id="password" name="password" placeholder="password" />
                           {/* {renderError("password")} */}
                           <p onClick={()=>hideOnHandler()} id="input_pass" className="input_pass"></p>
                       </div>
                    </div>
                    {errorMessages&&isSubmitted===false?
                    errorMessages && <p className="error-login">{errorMessages}</p>
                    :(isSubmitted?(
                        
                        <p className="success-login">{loginSuccess.message}</p>
                         
                    ):<p className="success-login"></p>)
                    }
                   <div className="btn-form">

                       {/* <button id="btn-regis" className="btn-regis" type="submit">Login</button> */}
                       <ButtonNoIcon
                       height= {"46px"}
                       textcolor={"#fff"}       
                        bordercolor={"#5429FF"}
                        borderradius={23}
                        width={150}
                        fontsize={16}
                        backgroundcolor={"#5429FF"}  id="btn-regis" className="btn-regis" type="submit">Login</ButtonNoIcon>
                       
                       <p className="para-with">or continue with</p>
                   </div>
                </form>
                  <div className="social">
                    <button className="social-btn">
                        <img src={GoogleIcon} alt=""/>
                    </button>
                    <button  className="social-btn">
                        <img src={GithubIcon} alt=""/>
                    </button>
                    <button className="social-btn">
                        <img src={FacebookIcon} alt=""/>
                    </button>
                    
                  </div>
                  <div className="signup">
                    <p className="signup1">Don't have an account yet?</p>
                    <p className="signup2">Sign up for free</p>

                  </div>
            </div>
            <div className="content-right">
                
                
                <div className="box">
                    <img className="person" src={Person} alt=""/>
                    
                </div>
                
            </div>  
        </div>
      
   </LoginScreenWrapper>
  )
  
}
export default LoginScreen