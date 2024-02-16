import React from 'react'
import MenuList from './MenuList'
import './styles.css'

const TreeViewMenu = ({ menu = [] }) => {
    return (
        <div className='tree-view-container'>
            <MenuList list={menu} />
        </div>
    )
}

export default TreeViewMenu