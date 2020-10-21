import React from 'react'

/** customFormat = (field, value, rowIndex, columnIndex) => formattedValue */
export default ({ values, array, customFormat, ...otherProps }) => {
  if (!values && !array) return
  if (!values && array) console.warn('Table: use \'values\' instead of deprecated \'array\' prop.')
  const tableValues = values || array
  return (
    <table {...otherProps}>
      <thead>
        <tr>
          {typeof tableValues[0] === 'object'
            ? Object.keys(tableValues[0]).map((column, columnIndex) => <th key={columnIndex}>{column}</th>)
            : <th>{tableValues[0]}</th>}
        </tr>
      </thead>
      <tbody>
        {tableValues.map((row, rowIndex) => {
          if (typeof row === 'object') {
            return (
              <tr key={rowIndex}>
                {Object.values(row).map((column, columnIndex) => (
                  <td key={columnIndex}>
                    {customFormat
                      ? customFormat(Object.keys(row)[columnIndex], column, rowIndex, columnIndex)
                      : column}
                  </td>
                ))}
              </tr>
            )
          } else {
            return (
              <tr key={rowIndex}><td>{row}</td></tr>
            )
          }
        })}
      </tbody>
    </table>
  )
}
