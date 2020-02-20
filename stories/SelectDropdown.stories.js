import React from 'react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links' // linkTo('Button')

import SelectDropdown from '../src/components/SelectDropdown'

import { stringArray, objectArrayWithDisabled } from './data/arrays'

// ----- Story -----

export default {
  title: 'SelectDropdown'
}

export const strings = () => <SelectDropdown options={stringArray} onChange={action('onChange')} />

export const objects = () => <SelectDropdown options={objectArrayWithDisabled} onChange={action('onChange')} />

export const selectOne = () => <SelectDropdown options={objectArrayWithDisabled} emptyOption='Select one:' onChange={action('onChange')} />

export const allowEmpty = () => <SelectDropdown options={objectArrayWithDisabled} emptyOption='Select one:' allowEmpty onChange={action('onChange')} />

export const noEmptyOption = () => <SelectDropdown options={objectArrayWithDisabled} emptyOption={null} onChange={action('onChange')} />
