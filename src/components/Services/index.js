import React from 'react'
import Icon1 from '../../images/it-1.svg';
import Icon2 from '../../images/it-2.svg';
import Icon3 from '../../images/it-3.svg';
import Icon4 from '../../images/engr-1.svg';
import Icon5 from '../../images/engr-2.svg';

import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Sevices = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Courses</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>BSIT</ServicesH2>
                    <ServicesP>System Developer</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>BSIT</ServicesH2>
                    <ServicesP>Computer Maintenance</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>BSIT</ServicesH2>
                    <ServicesP>Computer Maintenance</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Engineering</ServicesH2>
                    <ServicesP>Computer Engineering</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Engineering</ServicesH2>
                    <ServicesP>Industrial Engineering</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Sevices