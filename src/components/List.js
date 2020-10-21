import React from 'react'

const defaultFormat = (value, index) => value.toString()

/** customFormat = (value, index) => formattedValue */
const List = ({ values, ordered = false, customFormat = defaultFormat }) => {
  if (!values) return null
  return React.createElement(ordered ? 'ol' : 'ul', undefined, values.map((value, index) => <li key={index}>{customFormat(value, index)}</li>))
}
export default List
