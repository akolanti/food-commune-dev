import React, { useState ,useEffect,lazy,Suspense,useContext} from 'react'

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./Common.jsx";
import { Marginer } from "../Marginer";
import { AccountContext } from "./AccountContext";
import axios from 'axios';
import { useHistory} from 'react-router-dom';
export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [keeplogin,setKeeplogin]=useState(false);
  const history= useHistory();
  const api=axios.create({
    baseURL:'http://localhost:3000/api'
  })
  const onSubmit=(e)=>{
     e.preventDefault();
     
     if(!email)
     {
       alert('please add email');
     }
     else if (!password)
     {
      alert('please add password');

     }
    
     else
     {
      api.post('/login',{userName:email,password:password}).then(res=>{
        console.log(res.data);
         if(res.data.token!=null)
         {
          localStorage.setItem('token',res.data.token);
          localStorage.setItem('userName',email)
          history.push('/');
          
         }
         else
         {
           alert("invalid id/password");

         }
       
      }).catch(err=>console.log(err));
  
     }
  
  }
  

  return (
    
    <BoxContainer>
      <FormContainer>
        <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
        <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        <span > Keep me login</span>
        <input style={{padding:'1px',margin:'1px'}} type="checkbox" name="keeplogin" value={keeplogin} onChange={(e)=>setKeeplogin(!keeplogin)} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton onClick={onSubmit} type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
      </MutedLink><BoldLink  onClick={switchToSignup}>
          Signup
        </BoldLink>
    </BoxContainer>
  );
}