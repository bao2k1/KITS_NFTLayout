import React from 'react'
import { styled } from 'styled-components'
const LoginScreenWrapper=styled.div`
    display: flex;
    height: 100vh;
    overflow: hidden;
    .login-left{
        flex:50% ;
    }
    .login-right{
        flex:50%;
    }
   ` 
 const LoginScreen = () => {
  return (
   <LoginScreenWrapper>
    <div className="login-left">form</div>
    <div className="login-right">img</div>
   </LoginScreenWrapper>
  )
}
export default LoginScreen