import React from 'react'

const MenuItem = ({ option, value, isStringArray, handleChange }) => (
  <button
    className={'menu-item' + ((isStringArray ? option : option.value) === value ? ' selected' : '')}
    title={option.title}
    disabled={option.disabled}
    onClick={handleChange}
  >
    {isStringArray ? option : option.name}
  </button>
)

/** TabMenu */
export default ({ options, value, className, onChange }) => {
  const isStringArray = options && typeof options[0] === 'string'
  return (
    <nav className={'tab-menu ' + (className || '')}>
      {options && options.map((option, index) => (
        <MenuItem
          key={index}
          option={option}
          value={value}
          handleChange={(event) => onChange((isStringArray ? option : option.value))}
          isStringArray={isStringArray}
        />
      ))}
    </nav>
  )
}
