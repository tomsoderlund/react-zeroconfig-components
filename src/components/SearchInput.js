import React, { useState, useRef } from 'react'

import asObject from './lib/asObject'

const SearchInput = ({ placeholder = 'Type to search', className, canSubmitAny, onSearch, onSubmit }) => {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState()
  const inputElement = useRef(null)

  const handleChangeText = async (event) => {
    const searchString = event.target.value
    setSearchText(searchString)
    const results = await onSearch(searchString)
    if (results) {
      setSearchResults(results)
      setSearchText(asObject(results).name)
      inputElement.current.setSelectionRange(searchString.length, asObject(results).name.length)
    } else {
      setSearchResults()
    }
  }

  const handleKeyDown = (event) => {
    // backspace
    if (event.keyCode === 8) {
      setSearchText('')
    }
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    if (searchText.length > 0 && (searchResults || canSubmitAny)) {
      const isNew = !searchResults
      const addValue = (searchResults !== undefined) ? asObject(searchResults).value : searchText
      onSubmit(addValue, isNew)
      setSearchText('')
    }
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        placeholder={placeholder}
        className={className}
        ref={inputElement}
        value={searchText}
        onChange={handleChangeText}
        onKeyDown={handleKeyDown}
      />
    </form>
  )
}
export default SearchInput
