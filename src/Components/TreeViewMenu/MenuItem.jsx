import React, { useState } from 'react'
import MenuList from './MenuList'
import {FaMinus, FaPlus} from 'react-icons/fa'
import './styles.css'

const MenuItem = ({ item }) => {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    function handleToggleChildren(getCurrentlabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentlabel] : !displayCurrentChildren[getCurrentlabel]
        })
    }

    return (
        <li >
            <div className='menu-item'>
                <p>{item.label}</p>
                {
                    item && item.children && item.children.length ? <span onClick={() => handleToggleChildren(item.label)}>
                        {
                            displayCurrentChildren[item.label] ? <FaMinus color='#bbb' size={20} /> : <FaPlus color='#bbb' size={20} />
                        }
                    </span>
                        : null
                }
            </div>
            {
                item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
                    <MenuList list={item.children} />
                    : null
            }
        </li>
    )
}

export default MenuItem