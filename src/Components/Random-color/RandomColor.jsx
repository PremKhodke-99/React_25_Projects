import React, { useEffect } from 'react'
import { useState } from 'react'

const RandomColor = () => {

    const [typeOfColor, setTypeOfColor] = useState('HEX');
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }

        setColor(hexColor);
    }
    function handleRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(() => {
        if(typeOfColor === 'RGB') handleRandomRgbColor();
        else handleRandomHexColor()
    }, [typeOfColor])

    return (
        <div className="container" style={{
            width: '100vw',
            height: '50vh',
            background: color,
        }}>
            <button
                onClick={() => setTypeOfColor('HEX')
                }>Create HEX Color</button>
            <button
                onClick={() => setTypeOfColor('RGB')}>Create RGB Color</button>
            <button
                onClick={typeOfColor === 'HEX' ? handleRandomHexColor : handleRandomRgbColor}>Generate Random Color</button>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    justifyContent: 'center',
                    alignItems:'center',
                    color: '#fff',
                    fontSize: '60px',
                    marginTop: '50px'
                }}>
                    <h3>{typeOfColor}</h3>
                    <h1>{color}</h1>
                </div>
        </div>
    )
}

export default RandomColor