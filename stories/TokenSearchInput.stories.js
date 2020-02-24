import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import TokenSearchInput from '../src/components/TokenSearchInput'
import '../src/components/TokenSearchInput.css'
import '../src/components/TokenList.css'
import '../src/components/common.css'

import { stringArray, objectArrayWithDisabled } from './data/arrays'

// ----- Story -----

export default {
  title: 'TokenSearchInput'
}

export const strings = () => {
  const [selected, setSelected] = useState([stringArray[1]])

  const handleSearch = async (searchText) => {
    action('onSearch')(searchText)
    const searchResults = stringArray.filter(option => searchText.length && option.substr(0, searchText.length).toLowerCase() === searchText.toLowerCase())[0]
    return searchResults
  }

  const handleAdd = (value, isNew) => {
    action('onAdd')(value, isNew)
    const newSelected = [...selected, value]
    setSelected(newSelected)
  }

  const handleRemove = (value, index) => {
    action('onRemove')(value, index)
    const newSelected = selected.filter(option => option !== value)
    setSelected(newSelected)
  }

  return (
    <TokenSearchInput
      options={stringArray}
      value={selected}
      onSearch={handleSearch}
      onAdd={handleAdd}
      onRemove={handleRemove}
    />
  )
}

export const objects = () => {
  const [selected, setSelected] = useState([objectArrayWithDisabled[1]])

  const handleSelect = (value, index) => {
    action('onSelect')(value, index)
  }

  const handleSearch = async (searchText) => {
    action('onSearch')(searchText)
    const searchResults = objectArrayWithDisabled.filter(option => searchText.length && option.name.substr(0, searchText.length).toLowerCase() === searchText.toLowerCase())[0]
    return searchResults
  }

  const handleAdd = (value, isNew) => {
    action('onAdd')(value, isNew)
    const valueObj = objectArrayWithDisabled.filter(option => option.value == value)[0] // eslint-disable-line eqeqeq
    const newSelected = [...selected, valueObj]
    setSelected(newSelected)
  }

  const handleRemove = (value, index) => {
    action('onRemove')(value, index)
    const newSelected = selected.filter(option => option !== value)
    setSelected(newSelected)
  }

  return (
    <TokenSearchInput
      placeholder='Write e.g. Sam, Jill, Mr'
      options={objectArrayWithDisabled}
      value={selected}
      onSelect={handleSelect}
      onSearch={handleSearch}
      onAdd={handleAdd}
      onRemove={handleRemove}
    />
  )
}

export const canAddAny = () => {
  const [selected, setSelected] = useState([stringArray[1]])

  const handleSelect = (value, index) => {
    action('onSelect')(value, index)
  }

  const handleSearch = async searchText => {
    const searchResults = stringArray.filter(option => searchText.length && option.substr(0, searchText.length).toLowerCase() === searchText.toLowerCase())[0]
    return searchResults
  }

  const handleAdd = (value, isNew) => {
    action('onAdd')(value, isNew)
    if (isNew) {
      if (!window.confirm(`'${value}' doesn’t exist yet – add it anyway?`)) return
    }
    const newSelected = [...selected, value]
    setSelected(newSelected)
  }

  const handleRemove = (value, index) => {
    action('onRemove')(value, index)
    const newSelected = selected.filter(option => option !== value)
    setSelected(newSelected)
  }

  return (
    <TokenSearchInput
      options={stringArray}
      value={selected}
      onSelect={handleSelect}
      onSearch={handleSearch}
      onAdd={handleAdd}
      onRemove={handleRemove}
      canAddAny
    />
  )
}
