import React from 'react'

const MenuItem = ({ option, index, value, isStringArray, handleSelect }) => (
  <button
    className={'menu-item' + ((isStringArray ? index : option.value) === value ? ' selected' : '')}
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
          index={index}
          option={option}
          value={value}
          handleSelect={(event) => onChange((isStringArray ? index : option.value))}
          isStringArray={isStringArray}
        />
      ))}
    </div>
  )
}
