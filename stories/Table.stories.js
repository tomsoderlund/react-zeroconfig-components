import React from 'react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links' // linkTo('Button')

import Table from '../src/components/Table'
import '../src/components/Table.css'
import '../src/components/common.css'

const simpleArray = ['Apple', 'Banana', 'Citrus']

const tableData = [
  { name: 'Sam Lowry', age: 40 },
  { name: 'Jill Layton', age: 29 },
  { name: 'Harry Tuttle', age: 42 },
  { name: 'Mrs. Ida Lowry', age: 65 },
  { name: 'Mr. Kurtzmann', age: 55 }
]

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

export const basic = () => <Table values={simpleArray} />

export const complex = () => <Table values={tableData} />

export const deprecatedArray = () => <Table array={tableData} />

export const customDataFormat = () => (
  <Table
    values={tableData}
    customFormat={customFormat}
  />
)
