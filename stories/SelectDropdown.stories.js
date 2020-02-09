import React from 'react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links' // linkTo('Button')

import SelectDropdown from '../src/components/SelectDropdown'

const simpleArray = ['Apple', 'Banana', 'Citrus']

const menuOptions = [
  { name: 'Sam Lowry', value: 40 },
  { name: 'Jill Layton', value: 29 },
  { name: 'Harry Tuttle', value: 42, disabled: true },
  { name: 'Mrs. Ida Lowry', value: 65 },
  { name: 'Mr. Kurtzmann', value: 55 }
]

// ----- Story -----

export default {
  title: 'SelectDropdown'
}

export const basic = () => <SelectDropdown options={simpleArray} onChange={action('onChange')} />

export const objectArray = () => <SelectDropdown options={menuOptions} onChange={action('onChange')} />

export const selectOne = () => <SelectDropdown options={menuOptions} emptyOption='Select one:' onChange={action('onChange')} />

export const allowEmpty = () => <SelectDropdown options={menuOptions} emptyOption='Select one:' allowEmpty onChange={action('onChange')} />

export const noEmptyOption = () => <SelectDropdown options={menuOptions} emptyOption={null} onChange={action('onChange')} />
