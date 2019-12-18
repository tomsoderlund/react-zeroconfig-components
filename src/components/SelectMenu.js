import React, { useState } from 'react'

const Arrows = () => (
  <svg className='arrows' width='10px' height='18px' viewBox='0 0 10 18' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
    <g id='arrows' fill='gray'>
      <polygon id='up' points='5 0 10 7.5 0 7.5' />
      <polygon id='down' transform='translate(5, 13.75) rotate(-180) translate(-5, -13.75) ' points='5 10 10 17.5 0 17.5' />
    </g>
  </svg>
)

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

/** SelectMenu */
export default ({ options = [], value, className, onChange }) => {
  const [isOpen, setIsOpen] = useState(0)
  const isStringArray = options && typeof options[0] === 'string'
  const currentName = isStringArray ? value : options[value] && options[value].name

  const handleChange = value => {
    onChange(value)
    setIsOpen(false)
  }

  return (
    <div className={'select ' + (isOpen ? 'open ' : '') + (className || '')}>
      <button className='menu-closed' onClick={value => setIsOpen(!isOpen)}>
        {currentName}
        <Arrows />
      </button>
      <div className='menu-open'>
        {options && options.map((option, index) => (
          <MenuItem
            key={index}
            option={option}
            value={value}
            handleChange={event => handleChange(isStringArray ? option : option.value)}
            isStringArray={isStringArray}
          />
        ))}
      </div>
    </div>
  )
}
