import React,{useState} from 'react'


import {
    UnitesContainer,
    UnitesH1,

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
            {/* <UploadForm /> */}
          <ImageGrid setSelectedImg={setSelectedImg} />
          { selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        </div>
        </UnitesContainer>
    )
}

export default Unites