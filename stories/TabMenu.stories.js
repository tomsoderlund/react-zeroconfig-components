import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import TabMenu from '../src/components/TabMenu'
import '../src/components/TabMenu.css'
import '../src/components/common.css'

import { stringArray, objectArrayWithDisabled } from './data/arrays'

const menuOptions = [
  { name: 'Start', value: 0 },
  { name: 'Contacts', value: 1 },
  { name: 'Upgrade', value: 2, disabled: true },
  { name: 'About', value: 3 }
]

const CustomChild = ({ index, name, selected, handleChange }) => (
  <div
    style={{
      fontSize: '1.2em',
      flex: 1,
      textAlign: 'center',
      cursor: 'pointer',
      padding: '2em 0',
      backgroundImage: `url("https://picsum.photos/seed/react-zeroconfig-components-${index}/480/180")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      transition: 'all 0.3s',
      fontWeight: selected && 'bold',
      opacity: !selected && 0.5
    }}
    onClick={handleChange}
  >
    {name}
  </div>
)

// ----- Story -----

export default {
  title: 'TabMenu'
}

export const strings = () => {
  const [selected, setSelected] = useState(stringArray[1])
  const handleChange = value => {
    setSelected(value)
    action('onChange')(value)
  }
  return <TabMenu options={stringArray} value={selected} onChange={handleChange} />
}

export const objects = () => {
  const [selected, setSelected] = useState(objectArrayWithDisabled[1].value)
  const handleChange = value => {
    setSelected(value)
    action('onChange')(value)
  }
  return <TabMenu options={objectArrayWithDisabled} value={selected} onChange={handleChange} />
}

export const menu = () => {
  const [selected, setSelected] = useState(menuOptions[1].value)
  const handleChange = value => {
    setSelected(value)
    action('onChange')(value)
  }
  return <TabMenu elementType='nav' options={menuOptions} value={selected} onChange={handleChange} />
}

export const customChildren = () => {
  const [selected, setSelected] = useState(stringArray[1])
  const handleChange = value => {
    setSelected(value)
    action('onChange')(value)
  }
  return <TabMenu customChild={CustomChild} options={stringArray} value={selected} onChange={handleChange} />
}
