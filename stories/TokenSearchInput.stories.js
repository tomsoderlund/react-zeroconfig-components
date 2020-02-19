import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import TokenSearchInput from '../src/components/TokenSearchInput'
import '../src/components/TokenSearchInput.css'
import '../src/components/TokenList.css'
import '../src/components/common.css'

const simpleArray = ['Apple', 'Banana', 'Citrus']

const menuOptions = [
  { name: 'Sam Lowry', value: 0 },
  { name: 'Jill Layton', value: 1 },
  { name: 'Harry Tuttle', value: 2, disabled: true },
  { name: 'Mrs. Ida Lowry', value: 3 },
  { name: 'Mr. Kurtzmann', value: 4 }
]

// ----- Story -----

export default {
  title: 'TokenSearchInput'
}

export const basic = () => {
  const [selected, setSelected] = useState([simpleArray[1]])

  const handleSearch = async searchText => {
    const searchResults = simpleArray.filter(option => searchText.length && option.substr(0, searchText.length).toLowerCase() === searchText.toLowerCase())[0]
    return searchResults
  }

  const handleAdd = value => {
    const newSelected = [...selected, value]
    console.log('handleAdd:', value, newSelected)
    setSelected(newSelected)
    action('onAdd')(value)
  }

  const handleRemove = value => {
    const newSelected = selected.filter(option => option !== value)
    console.log('handleRemove:', value, newSelected)
    setSelected(newSelected)
    action('onRemove')(value)
  }

  return (
    <TokenSearchInput
      options={simpleArray}
      value={selected}
      onSearch={handleSearch}
      onAdd={handleAdd}
      onRemove={handleRemove}
    />
  )
}

export const objectArray = () => {
  const [selected, setSelected] = useState([menuOptions[1]])

  const handleSearch = async searchText => {
    const searchResults = menuOptions.filter(option => searchText.length && option.name.substr(0, searchText.length).toLowerCase() === searchText.toLowerCase())[0]
    return searchResults
  }

  const handleAdd = value => {
    const valueObj = (typeof menuOptions[0] === 'object')
      ? menuOptions.filter(option => option.value == value)[0] // eslint-disable-line eqeqeq
      : value
    const newSelected = [...selected, valueObj]
    setSelected(newSelected)
    action('onAdd')(newSelected)
  }

  const handleRemove = value => {
    const newSelected = selected.filter(option => option !== value)
    console.log('handleRemove:', value, newSelected)
    setSelected(newSelected)
    action('onRemove')(newSelected)
  }

  return (
    <TokenSearchInput
      options={menuOptions}
      value={selected}
      onSearch={handleSearch}
      onAdd={handleAdd}
      onRemove={handleRemove}
    />
  )
}
