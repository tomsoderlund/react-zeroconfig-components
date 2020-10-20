import React from 'react'

import asObject from './lib/asObject'

const MenuItem = ({ group, index, option, name, value, selected, handleChange }) => {
  const elementId = `${group}-${option.value}`
  const className = 'menu-item' + (selected ? ' selected' : '') + (option.disabled ? ' disabled' : '')
  return (
    <>
      <input
        id={elementId}
        type='radio'
        name={group}
        value={option.value}
        checked={selected}
        className={className}
        title={option.title}
        disabled={option.disabled}
        onChange={handleChange}
      />
      <label
        htmlFor={elementId}
        title={option.title}
        className={className}
      >
        {name}
      </label>
    </>
  )
}

const RadioButtons = ({ options = [], value, group = 'radio-group', className, onChange }) => {
  return (
    <span
      className={'radio-buttons' + (' ' + group) + (className ? ' ' + className : '')}
    >
      {options && options.map((option, index) => (
        <MenuItem
          key={index}
          index={index}
          group={group}
          option={asObject(option)}
          name={asObject(option).name}
          value={value}
          selected={asObject(option).value === value}
          handleChange={event => onChange(asObject(option).value, index)}
        />
      ))}
    </span>
  )
}
export default RadioButtons
