import React from 'react'

const MenuItem = ({ index, option, name, value, selected, currentValue, handleChange }) => (
  <button
    id={value}
    className={'menu-item' + (selected ? ' selected' : '')}
    title={option.title}
    disabled={option.disabled}
    onClick={handleChange}
  >
    {name}
  </button>
)

/** TabMenu */
export default ({ options, value, className, elementType = 'div', customChild, onChange }) => {
  const isStringArray = options && typeof options[0] === 'string'
  const ChildComponent = customChild || MenuItem
  return (
    React.createElement(
      elementType,
      {
        className: 'tab-menu ' + (className || '')
      },
      options && options.map((option, index) => (
        <ChildComponent
          key={index}
          index={index}
          option={option}
          name={isStringArray ? option : option.name}
          value={isStringArray ? option : option.value}
          currentValue={value}
          selected={(isStringArray ? option : option.value) === value}
          handleChange={(event) => onChange((isStringArray ? option : option.value), index)}
        />
      ))
    )
  )
}
