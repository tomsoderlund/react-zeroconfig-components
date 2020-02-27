import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import RadioButtons from '../src/components/RadioButtons'
import '../src/components/RadioButtons.css'
import '../src/components/common.css'

import { stringArray, objectArrayWithDisabled } from './data/arrays'

// ----- Story -----

export default {
  title: 'RadioButtons'
}

export const strings = () => {
  const [selected, setSelected] = useState(stringArray[1])

  const handleChange = (value, index) => {
    action('onChange')(value, index)
    setSelected(value)
  }

  return (
    <RadioButtons
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

  return (
    <RadioButtons
      options={objectArrayWithDisabled}
      value={selected}
      onChange={handleChange}
    />
  )
}

export const multiple = () => {
  const [selected, setSelected] = useState(stringArray[1])
  const [selected2, setSelected2] = useState(objectArrayWithDisabled[1].value)

  const handleChange = (value, index) => {
    action('onChange')(value, index)
    setSelected(value)
  }

  const handleChange2 = (value, index) => {
    action('onChange2')(value, index)
    setSelected2(value)
  }

  return (
    <main>
      <div>
        Fruit:
        <RadioButtons
          options={stringArray}
          value={selected}
          onChange={handleChange}
        />
      </div>
      <div>
        People:
        <RadioButtons
          group='people'
          options={objectArrayWithDisabled}
          value={selected2}
          onChange={handleChange2}
        />
      </div>
    </main>
  )
}
