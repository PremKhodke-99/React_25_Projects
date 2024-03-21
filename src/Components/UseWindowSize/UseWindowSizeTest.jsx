import React from 'react'
import useWindowResize from './useWindowResize'

function UseWindowSizeTest() {

    const windowSize = useWindowResize();
    const { width, height } = windowSize;
    return (
        <div>
            <h1>Use Window resize hook</h1>
            <p>Width : {width}</p>
            <p>Height : {height}</p>
        </div>
    )
}

export default UseWindowSizeTest