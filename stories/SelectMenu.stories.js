import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import SelectMenu from '../src/components/SelectMenu'
import '../src/components/SelectMenu.css'
import '../src/components/common.css'
import './SelectMenu.stories.css'

import { stringArray, objectArrayWithDisabled } from './data/arrays'

// ----- Story -----

export default {
  title: 'SelectMenu'
}

export const strings = () => {
  const [selected, setSelected] = useState(stringArray[1])
  const handleChange = (value, index) => {
    setSelected(value)
    action('onChange')(value, index)
  }
  return <SelectMenu options={stringArray} value={selected} onChange={handleChange} />
}

export const objects = () => {
  const [selected, setSelected] = useState(objectArrayWithDisabled[1].value)
  const handleChange = (value, index) => {
    setSelected(value)
    action('onChange')(value, index)
  }
  return <SelectMenu options={objectArrayWithDisabled} value={selected} onChange={handleChange} />
}

export const styled = () => {
  const [selected, setSelected] = useState(stringArray[1])
  const handleChange = (value, index) => {
    setSelected(value)
    action('onChange')(value, index)
  }
  return (
    <div className='SelectMenuContainer'>
      <SelectMenu options={stringArray} value={selected} onChange={handleChange} />
    </div>
  )
}
