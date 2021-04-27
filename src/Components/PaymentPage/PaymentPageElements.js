import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormContainer= styled.div`

height: 40rem;
width:90%;
margin:auto;
border:2px solid black;
margin-top:6rem;
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
`
export const FormHeading= styled.h1`
font-size:2.4rem;
border-bottom:1px solid black;
`;
export const FormBody= styled.div`
border: 2px solid black;
margin:1rem;
padding:1rem;
`;

export const FormRow= styled.div`
border:2px solid black;
min-width:25rem;
min-height:5rem;
display:flex;
align-items:center;
justify-content:space-evenly;
margin-bottom:1rem;

`;

export const FormRowLabel= styled.div`
border:2px solid black;
min-height:3rem;
min-width:7rem;
font-size:1.5rem;
display:flex;
justify-content:center;
`;

export const FormRowInput= styled.input`
min-height:3rem;
min-width:7rem;
margin-left:2rem;
display:flex;
justify-content:center;
`;

export const FormSubmit=styled.button`
display:flex;
align-items:center;
`;

export const FormLink= styled(Link)`

border-radius:50px;
background: #01bf71;
white-space:nowrap;
padding:10px 22px;
color: #010606;
font-size:16px;
outline:none;
border:none;
cursor: pointer;
transition:all 0.2s ease-in-out;
text-decoration:none;

&:hover {
    transition: all 0.2s ease-in-out;
    background:#fff;
    color: #010606;

}

`;
