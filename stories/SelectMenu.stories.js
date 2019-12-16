import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import SelectMenu from '../src/components/SelectMenu'
import '../src/components/SelectMenu.css'
import '../src/components/common.css'

const simpleArray = ['Apple', 'Banana', 'Citrus']

const menuOptions = [
  { name: 'Sam Lowry', value: 0 },
  { name: 'Jill Layton', value: 1 },
  { name: 'Harry Tuttle', value: 2 },
  { name: 'Mrs. Ida Lowry', value: 3 },
  { name: 'Mr. Kurtzmann', value: 4 }
]

// ----- Story -----

export default {
  title: 'SelectMenu'
}

export const basic = () => {
  const [selected, setSelected] = useState(0)
  const handleChange = value => {
    setSelected(value)
    action('onChange')(value)
  }
  return <SelectMenu options={simpleArray} value={selected} onChange={handleChange} />
}

export const objectArray = () => {
  const [selected, setSelected] = useState(0)
  const handleChange = value => {
    setSelected(value)
    action('onChange')(value)
  }
  return <SelectMenu options={menuOptions} value={selected} onChange={handleChange} />
}
