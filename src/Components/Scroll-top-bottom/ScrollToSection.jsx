import React, { useRef } from 'react'

function ScrollToSection() {

    const ref = useRef();

    const data = [

        {
            label: "first card",
            style: {
                width: '100%',
                height: '600px',
                background: 'red',
            }
        },
        {
            label: "second card",
            style: {
                width: '100%',
                height: '600px',
                background: 'green',
            }
        },
        {
            label: "third card",
            style: {
                width: '100%',
                height: '600px',
                background: 'blue',
            }
        },
        {
            label: "fouth card",
            style: {
                width: '100%',
                height: '600px',
                background: 'yellow',
            }
        },
        {
            label: "fifth card",
            style: {
                width: '100%',
                height: '600px',
                background: 'orange',
            }
        },

    ]

    function handleScrollToSection(){
        let pos = ref.current.getBoundingClientRect().top

        window.scrollTo({
            top: pos,
            behavior: "smooth"
        })
    }

    return (
        <div>
            <h1>Scroll to particular section</h1>
            <button onClick={handleScrollToSection}>Click to scroll</button>
            {
                data.map((dataItem, index) =>
                    <div ref={index ===3 ? ref : null} style={dataItem.style}>
                        <h3>{dataItem.label}</h3>
                    </div>
                )
            }
        </div>
    )
}

export default ScrollToSection