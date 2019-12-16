import React from 'react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links' // linkTo('Button')

import SelectDropdown from '../src/components/SelectDropdown'

const menuOptions = [
  { name: 'Sam Lowry', value: 40 },
  { name: 'Jill Layton', value: 29 },
  { name: 'Harry Tuttle', value: 42 },
  { name: 'Mrs. Ida Lowry', value: 65 },
  { name: 'Mr. Kurtzmann', value: 55 }
]

// ----- Story -----

export default {
  title: 'SelectDropdown'
}

export const basic = () => <SelectDropdown options={menuOptions} onChange={action('onChange')} />
