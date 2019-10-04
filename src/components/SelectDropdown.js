import React from 'react'

const handleChange = (onChange, event) => {
  const newEvent = Object.assign({}, event, { target: { value: (event.target.value === 'null') ? null : event.target.value } })
  if (onChange) onChange(newEvent)
}

export default (props) => {
  const { options, onChange, ...otherProps } = props
  const optionTags = [
    <option key='null' value=''>(none)</option>,
    ...props.options.map((option, index) => {
      const value = (typeof (option) === 'object' && (option.value || option.id))
        ? option.value || option.id
        : option
      const newOption = {
        value,
        name: (typeof (option) === 'object' && option.name) ? option.name : option,
        key: (option.key !== undefined)
          ? option.key
          : (value !== undefined)
            ? value
            : index
      }
      return <option key={newOption.key} data-key={newOption.key} value={newOption.value}>{newOption.name}</option>
    })
  ]
  return (
    <select {...otherProps} onChange={handleChange.bind(undefined, props.onChange)}>
      {optionTags}
    </select>
  )
}
