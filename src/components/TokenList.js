import React from 'react'

const Token = ({ option, value, isStringArray, handleChange }) => (
  <span
    className='token'
    title={option.title}
    disabled={option.disabled}
    onClick={handleChange}
  >
    {isStringArray ? option : option.name}
  </span>
)

/** TokenList */
export default ({ options, value, className, onChange }) => {
  const isStringArray = options && typeof options[0] === 'string'
  return (
    <div className={'token-list ' + (className || '')}>
      {options && options.map((option, index) => (
        <Token
          key={index}
          option={option}
          value={value}
          handleChange={(event) => onChange((isStringArray ? option : option.value))}
          isStringArray={isStringArray}
        />
      ))}
    </div>
  )
}
