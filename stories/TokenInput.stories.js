import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import TokenInput from '../src/components/TokenInput'
import '../src/components/TokenInput.css'
import '../src/components/TokenList.css'
import '../src/components/common.css'

import { stringArray, objectArrayWithDisabled } from './data/arrays'

// ----- Story -----

export default {
  title: 'TokenInput'
}

export const strings = () => {
  const [selected, setSelected] = useState([stringArray[1]])

  const handleAdd = value => {
    const newSelected = [...selected, value]
    setSelected(newSelected)
    action('onAdd')(value)
  }

  const handleRemove = value => {
    const newSelected = selected.filter(option => option !== value)
    setSelected(newSelected)
    action('onRemove')(value)
  }

  return <TokenInput options={stringArray} value={selected} onAdd={handleAdd} onRemove={handleRemove} />
}

export const objects = () => {
  const [selected, setSelected] = useState([objectArrayWithDisabled[1]])

  const handleSelect = (value, index) => {
    action('onSelect')(value, index)
  }

  const handleAdd = value => {
    const valueObj = (typeof objectArrayWithDisabled[0] === 'object')
      ? objectArrayWithDisabled.filter(option => option.value == value)[0] // eslint-disable-line eqeqeq
      : value
    const newSelected = [...selected, valueObj]
    setSelected(newSelected)
    action('onAdd')(newSelected)
  }

  const handleRemove = value => {
    const newSelected = selected.filter(option => option !== value)
    setSelected(newSelected)
    action('onRemove')(newSelected)
  }

  return <TokenInput options={objectArrayWithDisabled} value={selected} onSelect={handleSelect} onAdd={handleAdd} onRemove={handleRemove} />
}
