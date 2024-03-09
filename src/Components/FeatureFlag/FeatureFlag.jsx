import React, { useContext } from 'react'
import LightDarkMode from '../Light-Dark-Mode/LightDarkMode'
import TicTacToe from '../TicTacToe/TicTacToe'
import RandomColor from '../Random-color/RandomColor'
import Accordian from '../Accordian/Accordian'
import TreeViewMenu from '../TreeViewMenu/TreeViewMenu'
import { FeatureFlagContext } from './context'
import menu from '../TreeViewMenu/data'

function FeatureFlag() {

    const { loading, enabledFlags } = useContext(FeatureFlagContext)

    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe />
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor />
        },
        {
            key: 'showAccordian',
            component: <Accordian />
        },
        {
            key: 'showTreeView',
            component: <TreeViewMenu menu={menu} />
        },
    ]

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey]
    }

    if (loading) return <h1>Loading Data! Please wait</h1>

    return (
        <div>
            <h1>FeatureFlag</h1>
            {
                componentsToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
            }
        </div>
    )
}

export default FeatureFlag