import React from 'react'

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
  const { options = [], value = '', onChange, emptyOption = '(none)', ...otherProps } = props
  const isStringArray = options && typeof options[0] === 'string'

  const optionTags = [
    ...(emptyOption ? [<option key='null' value='' disabled>{emptyOption}</option>] : []),
    ...props.options.map((option, index) => {
      const newOption = {
        value: isStringArray ? option : option.value,
        name: isStringArray ? option : option.name
      }
      return (
        <MenuItem
          key={index}
          option={newOption}
        />
      )
    })
  ]
  return (
    <select
      {...otherProps}
      value={value}
      onChange={event => props.onChange(event.target.value)}
    >
      {optionTags}
    </select>
  )
}
