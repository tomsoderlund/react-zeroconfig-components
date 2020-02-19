import React, { useState, useRef } from 'react'

import TokenList from './TokenList'

const asObject = (strOrObj) => ({
  name: typeof strOrObj === 'object' ? strOrObj.name : strOrObj,
  value: typeof strOrObj === 'object' ? strOrObj.value : strOrObj
})

/** TokenSearchInput */
export default ({ value, className, onSearch, onAdd, onRemove }) => {
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
    if (searchResults) {
      onAdd(asObject(searchResults).value)
      setSearchText('')
    }
  }

  return (
    <div className={'token-search-input input-like ' + (className || '')}>
      <TokenList
        options={value}
        onRemove={onRemove}
      />
      <form onSubmit={handleSubmitForm}>
        <input
          placeholder='Type to search'
          ref={inputElement}
          value={searchText}
          onChange={handleChangeText}
          onKeyDown={handleKeyDown}
        />
      </form>
    </div>
  )
}
