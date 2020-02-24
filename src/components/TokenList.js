import React from 'react'

import asObject from './lib/asObject'

const XButton = ({ onRemove, option, index }) => (
  <button
    className='x-button' onClick={event => {
      event.stopPropagation()
      onRemove(asObject(option).value, index)
    }}
  />
)

const Token = ({ index, option, name, selected, currentValue, onSelect, onRemove }) => {
  return (
    <span
      className={'token' + (onSelect ? ' selectable' : '')}
      title={option.title}
      disabled={option.disabled}
      onClick={onSelect}
    >
      {name}
      {onRemove ? <XButton onRemove={onRemove} option={option} index={index} /> : null}
    </span>
  )
}

/** TokenList */
export default ({ options, value, className, onSelect, onRemove }) => {
  const isStringArray = options && typeof options[0] === 'string'
  return (
    <span className={'token-list ' + (className || '')}>
      {options && options.map((option, index) => (
        <Token
          key={index}
          index={index}
          option={option}
          name={isStringArray ? option : option.name}
          currentValue={value}
          selected={(isStringArray ? option : option.value) === value}
          onSelect={onSelect && ((event) => onSelect((isStringArray ? option : option.value), index))}
          onRemove={onRemove}
        />
      ))}
    </span>
  )
}
