import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../ButtonElement' ;
import restaurant from '../../Images/mexicanR.jpg'
import { Column2,InfoContainer,
    
    InfoRow,InfoWrapper,Img,
    ImgWrap,Column1,TextWrapper,TopLine,
    Heading,Subtitile,BtnWrap } from './RestaurantDataDisplayElements';

const RestaurantDataDisplay = (props) => {
    console.log(props.res);
    return (
        <InfoContainer >
              <InfoWrapper>
                  <InfoRow>
                      <Column1>
                      <TextWrapper>
                          <TopLine>{props.res.rating}.0 </TopLine>
                            <Heading>{props.res.res_name}</Heading>
                            <Subtitile>{props.res.address}</Subtitile>
                            {/* <BtnWrap>
                                <Button to="/restuarant"
                              
                                duration={500}
                                
                                exact="true"
                                offset={-40}
                                primary={primary ? 1 : 0 }
                                dark={dark ? 1 :0 }
                                
                                >{buttonLabel}</Button>
                            </BtnWrap> */}
                      </TextWrapper>
                      
                      </Column1>
                      <Column2>
                      <ImgWrap>
                      <Img src={restaurant}/>
                      </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
            </InfoContainer>  
    )
}

export default RestaurantDataDisplay
