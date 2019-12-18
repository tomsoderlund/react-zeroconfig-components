import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import TokenList from '../src/components/TokenList'
import '../src/components/TokenList.css'
import '../src/components/common.css'

const simpleArray = ['Apple', 'Banana', 'Citrus']

const menuOptions = [
  { name: 'Sam Lowry', value: 0 },
  { name: 'Jill Layton', value: 1 },
  { name: 'Harry Tuttle', value: 2, disabled: true },
  { name: 'Mrs. Ida Lowry', value: 3 },
  { name: 'Mr. Kurtzmann', value: 4 }
]

// ----- Story -----

export default {
  title: 'TokenList'
}

export const basic = () => {
  const [selected, setSelected] = useState(simpleArray[1])
  const handleSelect = value => {
    setSelected(value)
    action('onSelect')(value)
  }
  return <TokenList options={simpleArray} value={selected} onSelect={handleSelect} />
}

export const objectArray = () => {
  const [selected, setSelected] = useState(menuOptions[1].value)
  const handleSelect = value => {
    setSelected(value)
    action('onSelect')(value)
  }
  return <TokenList options={menuOptions} value={selected} onSelect={handleSelect} />
}
