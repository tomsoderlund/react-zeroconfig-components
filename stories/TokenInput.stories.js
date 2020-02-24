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

  const handleAdd = (value, index) => {
    action('onAdd')(value, index)
    const newSelected = [...selected, value]
    setSelected(newSelected)
  }

  const handleRemove = (value, index) => {
    action('onRemove')(value, index)
    const newSelected = selected.filter(option => option !== value)
    setSelected(newSelected)
  }

  return <TokenInput options={stringArray} value={selected} onAdd={handleAdd} onRemove={handleRemove} />
}

export const objects = () => {
  const [selected, setSelected] = useState([objectArrayWithDisabled[1]])

  const handleSelect = (value, index) => {
    action('onSelect')(value, index)
  }

  const handleAdd = (value, index) => {
    action('onAdd')(value, index)
    const valueObj = objectArrayWithDisabled.filter(option => option.value == value)[0] // eslint-disable-line eqeqeq
    const newSelected = [...selected, valueObj]
    setSelected(newSelected)
  }

  const handleRemove = (value, index) => {
    action('onRemove')(value, index)
    const newSelected = selected.filter(option => option !== value)
    setSelected(newSelected)
  }

  return <TokenInput options={objectArrayWithDisabled} value={selected} onSelect={handleSelect} onAdd={handleAdd} onRemove={handleRemove} />
}
