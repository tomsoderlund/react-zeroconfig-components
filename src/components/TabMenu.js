import React from 'react'

const MenuItem = ({ option, value, isStringArray, handleSelect }) => (
  <button
    className={'menu-item' + ((isStringArray ? option : option.value) === value ? ' selected' : '')}
    title={option.title}
    disabled={option.disabled}
    onClick={handleSelect}
  >
    {isStringArray ? option : option.name}
  </button>
)

/** TabMenu */
export default ({ options, value, onChange }) => {
  const isStringArray = options && typeof options[0] === 'string'
  return (
    <div className='tab-menu'>
      {options && options.map((option, index) => (
        <MenuItem
          key={index}
          option={option}
          value={value}
          handleSelect={(event) => onChange((isStringArray ? option : option.value))}
          isStringArray={isStringArray}
        />
      ))}
    </div>
  )
}
