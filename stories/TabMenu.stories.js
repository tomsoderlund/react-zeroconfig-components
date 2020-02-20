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
  return <TabMenu options={menuOptions} value={selected} onChange={handleChange} />
}
