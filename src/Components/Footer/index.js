import React from 'react'
import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter, FaYoutube } from 'react-icons/fa'
import {FooterContainer,FooterLinksWrapper,
    FooterWrap,FooterLinksContainer,FooterLinkItems,FooterLink,
    FooterLinkTitle,SocialIconLink,SocialIcons,SocialLogo,SocialMedia,SocialMediaWrap,WebsiteRights} from './FooterElements'
const Footer = () => {
    return (
       
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                              
                                <FooterLink to="/signin">How it works</FooterLink>    
                                <FooterLink to="/signin">Testimonials</FooterLink>    
                                <FooterLink to="/signin">Careers</FooterLink>    
                                <FooterLink to="/signin">Investors</FooterLink>    
                                <FooterLink to="/signin">Terms of Services</FooterLink>    
                                
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                              
                                <FooterLink to="/signin">How it works</FooterLink>    
                                <FooterLink to="/signin">Testimonials</FooterLink>    
                                <FooterLink to="/signin">Careers</FooterLink>    
                                <FooterLink to="/signin">Investors</FooterLink>    
                                <FooterLink to="/signin">Terms of Services</FooterLink>    
                                
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                              
                                <FooterLink to="/signin">How it works</FooterLink>    
                                <FooterLink to="/signin">Testimonials</FooterLink>    
                                <FooterLink to="/signin">Careers</FooterLink>    
                                <FooterLink to="/signin">Investors</FooterLink>    
                                <FooterLink to="/signin">Terms of Services</FooterLink>    
                                
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                              
                                <FooterLink to="/signin">How it works</FooterLink>    
                                <FooterLink to="/signin">Testimonials</FooterLink>    
                                <FooterLink to="/signin">Careers</FooterLink>    
                                <FooterLink to="/signin">Investors</FooterLink>    
                                <FooterLink to="/signin">Terms of Services</FooterLink>    
                                
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/'>
                                Food Commune 
                            </SocialLogo>
                            <WebsiteRights>Food Commune  { new Date().getFullYear()}
                                All Rights Reserved</WebsiteRights>
                                <SocialIcons>
                                    <SocialIconLink href='/' target='_blank' aria-label='FaceBook'>
                                        <FaFacebook></FaFacebook>
                                    </SocialIconLink>
                                    <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                                      <FaInstagram></FaInstagram>
                                    </SocialIconLink>
                                    <SocialIconLink href='/' target='_blank' aria-label='YouTube'>
                                      <FaYoutube></FaYoutube>
                                    </SocialIconLink>
                                    <SocialIconLink href='/' target='_blank' aria-label='Snapchat'>
                                        <FaSnapchat></FaSnapchat>
                                    </SocialIconLink>
                                    <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                                        <FaTwitter />
                                    </SocialIconLink>
                                </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
      
    )
}

export default Footer
