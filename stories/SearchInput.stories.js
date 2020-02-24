import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'

import SearchInput from '../src/components/SearchInput'
import '../src/components/common.css'

import { stringArray, objectArrayWithDisabled } from './data/arrays'

// ----- Story -----

export default {
  title: 'SearchInput'
}

export const strings = () => {
  const [selected, setSelected] = useState([stringArray[1]])

  const handleSearch = async (searchText) => {
    action('onSearch')(searchText)
    const searchResults = stringArray.filter(option => searchText.length && option.substr(0, searchText.length).toLowerCase() === searchText.toLowerCase())[0]
    return searchResults
  }

  const handleSubmit = (value, isNew) => {
    action('onSubmit')(value, isNew)
    const newSelected = [...selected, value]
    setSelected(newSelected)
  }

  return (
    <SearchInput
      onSearch={handleSearch}
      onSubmit={handleSubmit}
    />
  )
}

export const objects = () => {
  const [selected, setSelected] = useState([objectArrayWithDisabled[1]])

  const handleSearch = async (searchText) => {
    action('onSearch')(searchText)
    const searchResults = objectArrayWithDisabled.filter(option => searchText.length && option.name.substr(0, searchText.length).toLowerCase() === searchText.toLowerCase())[0]
    return searchResults
  }

  const handleSubmit = (value, isNew) => {
    action('onSubmit')(value, isNew)
    const valueObj = objectArrayWithDisabled.filter(option => option.value == value)[0] // eslint-disable-line eqeqeq
    const newSelected = [...selected, valueObj]
    setSelected(newSelected)
  }

  return (
    <SearchInput
      placeholder='Write e.g. Sam, Jill, Mr'
      onSearch={handleSearch}
      onSubmit={handleSubmit}
    />
  )
}

export const canSubmitAny = () => {
  const [selected, setSelected] = useState([stringArray[1]])

  const handleSearch = async searchText => {
    const searchResults = stringArray.filter(option => searchText.length && option.substr(0, searchText.length).toLowerCase() === searchText.toLowerCase())[0]
    return searchResults
  }

  const handleSubmit = (value, isNew) => {
    action('onSubmit')(value, isNew)
    if (isNew) {
      if (!window.confirm(`'${value}' doesn’t exist yet – add it anyway?`)) return
    }
    const newSelected = [...selected, value]
    setSelected(newSelected)
  }

  return (
    <SearchInput
      onSearch={handleSearch}
      onSubmit={handleSubmit}
      canSubmitAny
    />
  )
}
