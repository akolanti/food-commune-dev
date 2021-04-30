import React from 'react'
import Icon1 from '../../Images/takeout2.jpg';
import Icon2 from '../../Images/tacos.jpg';
import Icon3 from '../../Images/mexicanR.jpg';

import { ServicesContainer,
ServicesH1,ServicesCard,ServicesWrapper,ServicesIcon,ServicesH2,ServicesP} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="restaurants">
            <ServicesH1>Trending Restaurants</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}></ServicesIcon>
                    <ServicesH2>Jen's Bistro</ServicesH2>
                    <ServicesP>Authentic sample cusines and other stuff.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}></ServicesIcon>
                    <ServicesH2>Burrito Tacos and more tacos</ServicesH2>
                    <ServicesP>Taste the best tacos in town.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}></ServicesIcon>
                    <ServicesH2>Taste of Mexioc</ServicesH2>
                    <ServicesP> great taste and ingredients imported </ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
