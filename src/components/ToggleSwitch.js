import React from 'react'

const ToggleSwitch = (props) => {
  const { fieldName = 'toggle-switch', className, title, value, onChange, ...otherProps } = props
  return (
    <span
      {...otherProps}
      title={title}
      className={'toggle-switch' + (className || '')}
    >
      <input
        type='checkbox'
        id={fieldName}
        checked={value}
        onChange={({ target }) => onChange(target.checked)}
      />
      <label htmlFor={fieldName} />
    </span>
  )
}
export default ToggleSwitch
