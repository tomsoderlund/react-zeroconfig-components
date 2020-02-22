import React from 'react'

const XButton = ({ onRemove, option }) => <button className='x-button' onClick={event => onRemove(option)} />

const Token = ({ index, option, name, selected, currentValue, handleSelect, onRemove }) => (
  <span
    className='token'
    title={option.title}
    disabled={option.disabled}
    onClick={handleSelect}
  >
    {name}
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
          index={index}
          option={option}
          name={isStringArray ? option : option.name}
          currentValue={value}
          selected={(isStringArray ? option : option.value) === value}
          handleSelect={(event) => onSelect && onSelect((isStringArray ? option : option.value), index)}
          onRemove={onRemove}
        />
      ))}
    </span>
  )
}
