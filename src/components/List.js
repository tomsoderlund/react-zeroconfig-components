import React from 'react'

const defaultFormat = (value, index) => value.toString()

/** customFormat = (value, index) => formattedValue */
const List = ({ values, numbered, ordered, customFormat = defaultFormat }) => {
  if (!values) return null
  const isNumbered = numbered || ordered || false
  return React.createElement(isNumbered ? 'ol' : 'ul', undefined, values.map((value, index) => <li key={index}>{customFormat(value, index)}</li>))
}
export default List
