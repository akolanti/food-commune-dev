import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../ButtonElement' ;
import { Column2,InfoContainer,
    
    InfoRow,InfoWrapper,Img,
    ImgWrap,Column1,TextWrapper,TopLine,
    Heading,Subtitile,BtnWrap } from './InfoElements';

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,darkText,description,buttonLabel,img,alt,primary,dark}) => {
    return (
        <>
          <InfoContainer lightBg= {lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart} >
                      <Column1>
                      <TextWrapper>
                          <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitile darkText={darkText} >{description}</Subtitile>
                            <BtnWrap>
                                <Button to="/restuarant"
                              
                                duration={500}
                                
                                exact="true"
                                offset={-40}
                                primary={primary ? 1 : 0 }
                                dark={dark ? 1 :0 }
                                
                                >{buttonLabel}</Button>
                            </BtnWrap>
                      </TextWrapper>
                      
                      </Column1>
                      <Column2>
                      <ImgWrap>
                      <Img src={img} alt={alt} />
                      </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
            </InfoContainer>  
        </>
    )
}

export default InfoSection
