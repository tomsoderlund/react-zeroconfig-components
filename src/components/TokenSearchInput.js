import React, { useState, useRef } from 'react'

import asObject from './lib/asObject'
import TokenList from './TokenList'

/** TokenSearchInput */
export default ({ value, className, placeholder = 'Type to search', canAddAny, onSelect, onSearch, onAdd, onRemove }) => {
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
    if (searchText.length > 0 && (searchResults || canAddAny)) {
      const isNew = !searchResults
      const addValue = asObject(searchResults).value || searchText
      onAdd(addValue, isNew)
      setSearchText('')
    }
  }

  return (
    <div className={'token-search-input input-like ' + (className || '')}>
      <TokenList
        options={value}
        onSelect={onSelect}
        onRemove={onRemove}
      />
      <form onSubmit={handleSubmitForm}>
        <input
          placeholder={placeholder}
          ref={inputElement}
          value={searchText}
          onChange={handleChangeText}
          onKeyDown={handleKeyDown}
        />
      </form>
    </div>
  )
}
