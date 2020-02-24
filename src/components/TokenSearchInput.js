import React from 'react'

import TokenList from './TokenList'
import SearchInput from './SearchInput'

/** TokenSearchInput */
export default ({ value, className, placeholder, canAddAny, onSelect, onSearch, onAdd, onRemove }) => {
  return (
    <div className={'token-search-input input-like ' + (className || '')}>
      <TokenList
        options={value}
        onSelect={onSelect}
        onRemove={onRemove}
      />
      <SearchInput
        placeholder={placeholder}
        canSubmitAny={canAddAny}
        onSearch={onSearch}
        onSubmit={onAdd}
      />
    </div>
  )
}
