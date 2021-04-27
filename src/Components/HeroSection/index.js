import React,{useState} from 'react'
import Video from '../../video-gifs/video.mp4'
import { HeroContainer, HeroBg,VideoBg,HeroContent,HeroBtnWrapper,HeroH1,HeroP,ArrowForward,ArrowRight} from './HeroElements';
import {Button} from '../ButtonElement'

const HeroSection = () => {

const [hover,setHover] = useState(false)

const onHover =()=>{
    setHover(!hover)
}

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src ={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Food. For you. From around the corner.</HeroH1> 
                {/* For you, from around the corner */}
                    <HeroP>
                       Pick up food from your nearby restaurants
                    </HeroP>
                <HeroBtnWrapper>
                    <Button to="/list" onMouseEnter={onHover} onMouseLeave= {onHover}>
                        Order now {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
