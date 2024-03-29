import React, { useState, useRef, useEffect } from 'react'

const EditForm = ({ id, value, placeholder, style, onChange, setIsEditing }) => {
  const [inputValue, setInputValue] = useState(value)
  const inputElement = useRef(null)
  useEffect(() => inputElement.current.focus(), [])

  const handleSubmit = (event) => {
    event.preventDefault()
    onChange(inputElement.current.value)
    setIsEditing(false)
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
      <input
        id={id}
        ref={inputElement}
        type='text'
        value={inputValue || ''}
        style={{
          padding: 0,
          ...style
        }}
        placeholder={placeholder}
        required
        onChange={e => setInputValue(e.target.value)}
        onBlur={handleSubmit}
      />
    </form>
  )
}

const EditInPlace = ({ id, canEdit = true, children, value, placeholder, style, onChange }) => {
  const [isEditing, setIsEditing] = useState(false)
  return (
    <span className='edit-in-place'>
      {isEditing
        ? (
          <EditForm
            id={id}
            value={value}
            placeholder={placeholder}
            style={style}
            onChange={onChange}
            setIsEditing={setIsEditing}
          />
          )
        : (
          <span
            onClick={e => setIsEditing(canEdit)}
          >
            {children}
          </span>
          )}
    </span>
  )
}
export default EditInPlace
