import React, { useState } from 'react'
// import { action } from '@storybook/addon-actions'

import TabMenu from '../src/components/TabMenu'
import './styles.css'

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
  title: 'TabMenu'
}

export const basic = () => {
  const [selected, setSelected] = useState(0)
  return <TabMenu options={simpleArray} value={selected} onChange={value => setSelected(value)} />
}

export const objectArray = () => {
  const [selected, setSelected] = useState(0)
  return <TabMenu options={menuOptions} value={selected} onChange={value => setSelected(value)} />
}