import React from 'react';
import Tabs from './Tabs';
import './tabs.css'

function RandomComponent({number}) {
  return <h1>Tab No. {number}</h1>
}

const Tabtest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <RandomComponent number={1}/>
    },
    {
      label: "Tab 2",
      content: <RandomComponent number={2}/>
    },
    {
      label: "Tab 3",
      content: <RandomComponent number={3}/>
    }
  ]


  function handleChange(currentTabIndex){
    console.log(currentTabIndex);
  }

  return (
    <Tabs tabsContent={tabs} onChange={handleChange}/>
  )
}

export default Tabtest