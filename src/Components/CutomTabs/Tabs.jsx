import React, { useState } from 'react'

const Tabs = ({ tabsContent, onChange }) => {


    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(getCurrentIndex) {
        setCurrentTabIndex(getCurrentIndex);
        onChange(getCurrentIndex);
    }

    return (
        <div className='wrapper'>
            <div className="heading">
                {tabsContent.map((item, index) =>
                    <div
                        onClick={() => handleOnClick(index)}
                        key={item.label}
                        className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
                    >
                        <span className='label'>{item.label}</span>
                    </div>)
                }
            </div>
            <div className="content">
                {
                    tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
                }
            </div>
        </div>
    )
}

export default Tabs