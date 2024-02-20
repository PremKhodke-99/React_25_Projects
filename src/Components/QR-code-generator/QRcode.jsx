import React, { useState } from 'react'
import QRCode from 'react-qr-code';

const QRcode = () => {

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    function handleGenerateQrCode() {
        setQrCode(input);
        setInput('')
    }

    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input type="text"y
                    name="ge-code"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    placeholder='Enter your value here'
                />
                <button
                    disabled={input && input.trim() !== '' ? false : true}
                    onClick={handleGenerateQrCode}
                >Generate</button>
            </div>
            <QRCode
                id='qr-code-value'
                value={qrCode}
                size={400}
                bgColor='#fff' />
        </div>
    )
}

export default QRcode