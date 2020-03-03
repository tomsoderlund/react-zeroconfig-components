import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import SelectMenu from '../src/components/SelectMenu'
import '../src/components/SelectMenu.css'
import '../src/components/common.css'
import './SelectMenu.stories.css'

import { stringArray, objectArrayWithDisabled } from './data/arrays'

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
  title: 'SelectMenu'
}

export const strings = () => {
  const [selected, setSelected] = useState(stringArray[1])

  const handleChange = (value, index) => {
    action('onChange')(value, index)
    setSelected(value)
  }

  return (
    <SelectMenu
      options={stringArray}
      value={selected}
      onChange={handleChange}
    />
  )
}

export const objects = () => {
  const [selected, setSelected] = useState(objectArrayWithDisabled[1].value)

  const handleChange = (value, index) => {
    action('onChange')(value, index)
    setSelected(value)
  }

  return <SelectMenu options={objectArrayWithDisabled} value={selected} onChange={handleChange} />
}

export const styled = () => {
  const [selected, setSelected] = useState(stringArray[1])

  const handleChange = (value, index) => {
    action('onChange')(value, index)
    setSelected(value)
  }

  return (
    <div className='SelectMenuContainer'>
      <SelectMenu options={stringArray} value={selected} onChange={handleChange} />
    </div>
  )
}

export const customChildren = () => {
  const [selected, setSelected] = useState(stringArray[1])

  const handleChange = (value, index) => {
    action('onChange')(value, index)
    setSelected(value)
  }

  return (
    <SelectMenu
      options={stringArray}
      value={selected}
      onChange={handleChange}
      customChild={CustomChild}
    />
  )
}
