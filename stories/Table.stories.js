import React from 'react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links' // linkTo('Button')

import Table from '../src/components/Table'
import '../src/components/Table.css'
import '../src/components/common.css'

import { stringArray, objectArray } from './data/arrays'

const customFormat = (field, value) => {
  switch (field) {
    case 'age':
      return `${value} years`
    default:
      return value
  }
}

// ----- Story -----

export default {
  title: 'Table'
}

export const strings = () => <Table values={stringArray} />

export const objects = () => <Table values={objectArray} />

export const deprecatedArray = () => <Table array={objectArray} />

export const customDataFormat = () => (
  <Table
    values={objectArray}
    customFormat={customFormat}
  />
)
