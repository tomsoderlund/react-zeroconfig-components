import React from 'react'

/** TabMenu */
export default ({ options, value, onChange }) => {
  const isStringArray = typeof options[0] === 'string'
  return (
    <div className='tab-menu'>
      {options.map((option, index) => (
        <span
          key={index}
          className={'tab-menu-item' + ((isStringArray ? index : option.value) === value ? ' selected' : '')}
          title={option.title}
          onClick={(event) => onChange((isStringArray ? index : option.value))}
        >
          {isStringArray ? option : option.name}
        </span>
      ))}
    </div>
  )
}
