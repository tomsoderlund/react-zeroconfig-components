import React from 'react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links' // linkTo('Button')

import List from '../src/components/List'
// import '../src/components/List.css'
import '../src/components/common.css'

const simpleArray = ['Apple', 'Banana', 'Citrus']

const people = [
  { name: 'Sam Lowry', age: 40 },
  { name: 'Jill Layton', age: 29 },
  { name: 'Harry Tuttle', age: 42 },
  { name: 'Mrs. Ida Lowry', age: 65 },
  { name: 'Mr. Kurtzmann', age: 55 }
]

const customFormat = (person) => `${person.name} (${person.age} years)`

// ----- Story -----

export default {
  title: 'List'
}

export const basic = () => <List values={simpleArray} />

export const ordered = () => <List values={simpleArray} ordered />

export const customDataFormat = () => (
  <List
    values={people}
    customFormat={customFormat}
  />
)
