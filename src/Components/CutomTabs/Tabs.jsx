import React, { useState } from 'react'

const Tabs = ({ tabsContent }) => {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    return (
        <div className='wrapper'>
            <div className="heading">
                {tabsContent.map((item, index) =>
                    <div
                        onClick={() => setCurrentTabIndex(index)}
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