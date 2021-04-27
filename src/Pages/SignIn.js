import React, {useState} from 'react';
import '../App.css'
import styled from "styled-components";
import { AccountBox } from '../Components/AccountBox'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignIn = () => {
    return (
     
        <AppContainer>
        <AccountBox />
      </AppContainer>
     
      
    )
}

export default SignIn
