import React from 'react'

/** customFormat = (field, value) => formattedValue */
export default ({ array, customFormat, className }) => array && array.length
  ? (
    <table className={className}>
      <thead>
        <tr>
          {Object.keys(array[0]).map((column, columnIndex) => <th key={columnIndex}>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        {array.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.values(row).map((column, columnIndex) => (
              <td key={columnIndex}>
                {customFormat ? customFormat(Object.keys(row)[columnIndex], column) : column}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
  : null
