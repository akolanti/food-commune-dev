import React from 'react'
import Icon1 from '../../Images/takeout2.jpg';
import Icon2 from '../../Images/takeout2.jpg';
import Icon3 from '../../Images/takeout2.jpg';

import { ServicesContainer,
ServicesH1,ServicesCard,ServicesWrapper,ServicesIcon,ServicesH2,ServicesP} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id="restaurants">
            <ServicesH1>Sample Restaurants</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}></ServicesIcon>
                    <ServicesH2>Sample Restaurant</ServicesH2>
                    <ServicesP>Authentic sample cusines and other stuff.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}></ServicesIcon>
                    <ServicesH2>Sample Restaurant</ServicesH2>
                    <ServicesP>Authentic sample cusines and other stuff.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}></ServicesIcon>
                    <ServicesH2>Sample Restaurant</ServicesH2>
                    <ServicesP>Authentic sample cusines and other stuff.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
