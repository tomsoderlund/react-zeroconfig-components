import React from 'react'

/** customFormat = (options, field, value) => formattedValue */
export default ({ array, customFormat }) => array && array.length
  ? (
    <table>
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
  : <p>No data to show in table</p>
