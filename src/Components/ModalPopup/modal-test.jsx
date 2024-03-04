import React, { useState } from 'react'
import Modal from './Modal';
import './modal.css'

const Modaltest = () => {
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }

    function onClose() {
        setShowModalPopup(false);
    }

    return (
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {
                showModalPopup && <Modal 
                header={<h1>Custom Header</h1>}
                footer={<h1>Custom Footer</h1>}
                onClose={onClose} body={<div>Customized Body</div>} />
            }
        </div>
    )
}

export default Modaltest