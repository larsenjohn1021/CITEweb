import React,{useState} from 'react'
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
import UploadForm from '../../private/Uploadform';
import ImageGrid from '../../private/ImageGrid';
import Modal from '../../private/Modal';
const Unites = () => {
    
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <UnitesContainer id="unites">
            <UnitesH1>ANNOUNCEMENTS</UnitesH1>
          <div>
            <UploadForm />
          <ImageGrid setSelectedImg={setSelectedImg} />
          { selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </div>
        </UnitesContainer>
    )
}

export default Unites