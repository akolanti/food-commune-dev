import styled from "styled-components";
import {Link, Link as LinkR} from 'react-router-dom'

export const ProductsContainer=styled.div`
min-height:100vh;
padding: 5rem calc((100vw-1300px)/2);
background:#fff;
color:black;
display:flex;
align-items:center;
flex-direction:column;

`

export const ProductWrapper= styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
margin:0 auto;


`

export const ProductCard= styled.div`
margin: 2rem;
border-radius: 2rem;

`
export const ProductImg= styled.img`
height:300px;
min-width:300px;
max-width:100%;
box-shadow:8px 8px grey;
border-radius: 10px;

`
export const ProductsHeading= styled.h1`
font-size: clamp(2.5rem,2.5vw,3rem);
text-align:center;
margin-bottom:5rem;

`

export const ProductTitle =styled.h2`
font-weight:400;
font-size:1.5rem;

`

export const ProductInfo= styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:2rem;
text-align:center;

`

export const ProductDesc= styled.p`
margin-bottom:1rem;
`

export const ProductPrice=styled.p`
margin-bottom:1rem;
font-size:2rem;

`

export const ProductButton= styled.button`
font-size:1rem;
padding: 1rem 4rem;
border:none;
background:#FFCC00;
color: #101;
transition: 0.2s ease-in-out;
border-radius:8px;

`

export const PaymentLink = styled(Link)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding: 0 1rem;
height: 100% auto;
cursor: pointer;
color: #101;


&:active {
    border-bottom: 3px solid black;

}

&:hover{
    color:yellow;
}
`