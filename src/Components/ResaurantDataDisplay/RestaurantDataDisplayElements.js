import styled from 'styled-components'

export const InfoContainer= styled.div`
color:#fff;
background: black;

@media screen and (max-width: 768px){
    padding-top: 50px;
}`

export const InfoWrapper = styled.div`
display:grid;
z-index:1;
height:600px;
width:100%;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding: 0 24px;
justify-content:center;
`
export const InfoRow = styled.div`
display:grid;
grid-auto-columns: minmax(auto,1fr);
align-items:center;
grid-template-areas: 'col2 col1';

@media screen and (max-width:768px){
     grid-template-areas: 'col1' 'col2';

}
`

export const Column1 = styled.div`
margin-bottom:5px;
padding:0 10px;
grid-area:col1;

`

export const Column2 = styled.div`
margin-bottom:5px;
padding:0 10px;
grid-area:col2;

`
export const TextWrapper =styled.div`
max-width:540px;
padding-top:0;
padding-bottom: 10px;

`

export const TopLine =styled.p`
color: #01bf71;
font-size:16px;
line-height:16px;
font-weight:700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;

`

export const Heading =styled.h1`
margin-bottom:24px;
font-size:48px;
line-height:1.1;
font-weight:600;
color: '#f7f8fa' ;
@media screen and (max-width:480px){
    font-size:32px;

}
`

export const Subtitile = styled.p`
max-width:440px;
margin-bottom:35px;
font-size: 18px;
line-height:18px;
color:  '#fff';

`
export const BtnWrap = styled.div`
display:flex;
justify-content:flex-start;

`

export const ImgWrap =styled.div`
max-width: 555px;
height: 100%;

`
export const Img = styled.img`
width:100%;
margin: 0 0 10px 0;
padding-right:1rem;

`