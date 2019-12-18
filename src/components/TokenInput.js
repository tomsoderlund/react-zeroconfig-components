import React from 'react'

import SelectDropdown from './SelectDropdown'
import TokenList from './TokenList'

/** TokenInput */
export default ({ options, value, className, onAdd, onRemove }) => {
  return (
    <div className={'token-input input-like ' + (className || '')}>
      <TokenList
        options={value}
        className={className}
        onRemove={onRemove}
      />
      <SelectDropdown
        options={options}
        value=''
        className={className}
        onChange={value => onAdd(value)}
      />
    </div>
  )
}
