import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import TokenList from '../src/components/TokenList'
import '../src/components/TokenList.css'
import '../src/components/common.css'

import { stringArray, objectArrayWithDisabled } from './data/arrays'

// ----- Story -----

export default {
  title: 'TokenList'
}

export const strings = () => {
  const [selected, setSelected] = useState(stringArray[1])

  const handleSelect = (value, index) => {
    setSelected(value)
    action('onSelect')(value, index)
  }

  return <TokenList options={stringArray} value={selected} onSelect={handleSelect} />
}

export const objects = () => {
  const [selected, setSelected] = useState(objectArrayWithDisabled[1].value)

  const handleSelect = (value, index) => {
    setSelected(value)
    action('onSelect')(value, index)
  }

  return <TokenList options={objectArrayWithDisabled} value={selected} onSelect={handleSelect} />
}
