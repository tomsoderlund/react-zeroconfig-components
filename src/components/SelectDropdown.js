import React from 'react'

import asObject from '../lib/asObject'

const MenuItem = ({ option }) => (
  <option
    value={option.value}
    disabled={option.disabled}
  >
    {option.name}
  </option>
)

/** SelectDropdown */
export default (props) => {
  const { options = [], value = '', onChange, emptyOption = '(none)', allowEmpty, ...otherProps } = props

  const optionTags = [
    ...(emptyOption ? [<option key='null' value='' disabled={!allowEmpty}>{emptyOption}</option>] : []),
    ...props.options.map((option, index) => (
      <MenuItem
        key={index}
        option={asObject(option)}
      />
    ))
  ]

  return (
    <select
      {...otherProps}
      value={value}
      onChange={event => onChange(event.target.value)}
    >
      {optionTags}
    </select>
  )
}
