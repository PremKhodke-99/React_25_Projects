import React from 'react'

function Suggestion({ handleClick, data }) {
    return (
        <ul>
            {
                data && data.length ?
                    data.map((item, index) =>
                        <li
                            onClick={handleClick}
                            key={index}
                        >{item}</li>
                    ) : null
            }
        </ul>
    )
}

export default Suggestion