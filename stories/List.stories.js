import React from 'react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links' // linkTo('Button')

import List from '../src/components/List'
// import '../src/components/List.css'
import '../src/components/common.css'

import { stringArray, objectArray } from './data/arrays'

const customFormat = (person) => `${person.name} (${person.age} years)`

// ----- Story -----

export default {
  title: 'List'
}

export const strings = () => <List values={stringArray} />

export const ordered = () => <List values={stringArray} ordered />

export const customDataFormat = () => (
  <List
    values={objectArray}
    customFormat={customFormat}
  />
)
