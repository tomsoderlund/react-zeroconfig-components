import React from 'react'

const XButton = ({ onRemove, option }) => <button className='x-button' onClick={event => onRemove(option)} />

const Token = ({ option, value, isStringArray, handleSelect, onRemove }) => (
  <span
    className='token'
    title={option.title}
    disabled={option.disabled}
    onClick={handleSelect}
  >
    {isStringArray ? option : option.name}
    {onRemove ? <XButton onRemove={onRemove} option={option} /> : null}
  </span>
)

/** TokenList */
export default ({ options, value, className, onSelect, onRemove }) => {
  const isStringArray = options && typeof options[0] === 'string'
  return (
    <span className={'token-list ' + (className || '')}>
      {options && options.map((option, index) => (
        <Token
          key={index}
          option={option}
          value={value}
          handleSelect={(event) => onSelect && onSelect((isStringArray ? option : option.value))}
          onRemove={onRemove}
          isStringArray={isStringArray}
        />
      ))}
    </span>
  )
}
