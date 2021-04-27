import React, { useState,useContext} from "react";
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
import {Redirect, useHistory, withRouter } from 'react-router-dom';

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const [email,setEmail]=useState('');
  const [userName,setuserName]=useState('');
  const [password,setPassword]=useState('');
  const [confirmpass,setConfirmpass]=useState('');
  const history= useHistory();
  const api=axios.create({
    baseURL:'http://localhost:3000/api'
  })
  

  const onSubmit=(e)=>{
     e.preventDefault();
     if(!email || !userName || !password || !confirmpass)
     {
       alert('please fill all blanks');
     }
     
     else
     {
      


      api.post('/register',{email:email,password:password,userName:userName}).then(res=>{
        console.log(res.data);
         if(res.data!=null)
         {
            alert("registered sucessfully");

          history.push('/');
         }
         else
         {
          console.log(res.data);

           alert("user alredy exists");

         }
       
      }).catch(err=>console.log(err));
  
     }
  
  }



  
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" name="userName" value={userName} onChange={(e)=>setuserName(e.target.value)} placeholder="Full Name" />
        <Input type="email"  name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
        <Input type="password"  name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
        <Input type="password"  name="confirmpass" value={confirmpass} onChange={(e)=>setConfirmpass(e.target.value)} placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton onClick={onSubmit} type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
      </MutedLink>
      <BoldLink  onClick={switchToSignin}>
          Signin
        </BoldLink>
    </BoxContainer>
  );
}




// export class SignupForm extends Component {

//   constructor(props){
//     super(props);
//     this.state= {redirect:null};

//   }

//   SignupFormImplementation(props) {
//     const { switchToSignin } = useContext(AccountContext);
//    const [email,setEmail]=useState('');
//       const [userName,setuserName]=useState('');
//       const [password,setPassword]=useState('');
//       const [confirmpass,setConfirmpass]=useState('');
//       this.state= {redirect:null}
//       const api=axios.create({
//         baseURL:'http://localhost:3000/api'
//       })

//   }

//   render() {

//     return (
//       <BoxContainer>
//       <FormContainer>
//         <Input type="text" name="userName" value={userName} onChange={(e)=>setuserName(e.target.value)} placeholder="Full Name" />
//         <Input type="email"  name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
//         <Input type="password"  name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
//         <Input type="password"  name="confirmpass" value={confirmpass} onChange={(e)=>setConfirmpass(e.target.value)} placeholder="Confirm Password" />
//       </FormContainer>
//       <Marginer direction="vertical" margin={10} />
//       <SubmitButton onClick={onSubmit} type="submit">Signup</SubmitButton>
//       <Marginer direction="vertical" margin="1em" />
//       <MutedLink href="#">
//         Already have an account?
//         <BoldLink href="#" onClick={switchToSignin}>
//           Signin
//         </BoldLink>
//       </MutedLink>
//     </BoxContainer>
//     )
//   }
// }

// export default SignupForm
