import React from 'react'
import Icon1 from '../../images/it-1.svg';
import Icon2 from '../../images/it-2.svg';
import Icon3 from '../../images/it-3.svg';

import {
    UnitesContainer,
    UnitesH1,
    UnitesWrapper,
    UnitesCard,
    UnitesIcon,
    UnitesH2,
    UnitesP
} from './UnitesElement';

const Unites = () => {
    return (
        <UnitesContainer id="unites">
            <UnitesH1>Unites Organization</UnitesH1>
            <UnitesWrapper>
                <UnitesCard>
                    <UnitesIcon src={Icon1}/>
                    <UnitesH2>BSIT</UnitesH2>
                    <UnitesP>System Developer</UnitesP>
                </UnitesCard>
                <UnitesCard>
                    <UnitesIcon src={Icon2}/>
                    <UnitesH2>BSIT</UnitesH2>
                    <UnitesP>Computer Maintenance</UnitesP>
                </UnitesCard>
                <UnitesCard>
                    <UnitesIcon src={Icon3}/>
                    <UnitesH2>BSIT</UnitesH2>
                    <UnitesP>System Developer</UnitesP>
                </UnitesCard>
            </UnitesWrapper>
        </UnitesContainer>
    )
}

export default Unites