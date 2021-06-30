import React from 'react'
import { Button } from '../ButtonElement'; 
import Icon1 from '../../images/img1.jpg';
import {
    InfoContainer, 
    InfoWrapper, 
    InfoRow, 
    Column1, 
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    Mission,
    Mission1,
    Vission,
    Vission1,

} from './InfoElement';

const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headline,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    primary,
    dark,
    dark2,
    mission,
    mission1,
    vission,
    vission1,
}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1: 0}
                                dark2={dark2 ? 1: 0}
                                >
                                    {buttonLabel}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>

                        <Column2>
                        <TextWrapper>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                                <Vission>{vission}</Vission>
                                <Vission1>{vission1}</Vission1>
                                <Mission>{mission}</Mission>
                                <Mission1>{mission1}</Mission1>
                        </TextWrapper>
                        </Column2>
                        
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
