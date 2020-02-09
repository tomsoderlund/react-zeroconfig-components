import React from 'react'

const defaultFormat = value => value.toString()

const List = ({ values, ordered = false, customFormat = defaultFormat }) => {
  if (!values) return null
  return React.createElement(ordered ? 'ol' : 'ul', undefined, values.map((value, index) => <li key={index}>{customFormat(value)}</li>))
}
export default List
