import React, { useState, useRef, useEffect } from 'react'

const EditForm = ({ value, placeholder, style, onChange, setIsEditing }) => {
  const [inputValue, setInputValue] = useState(value)
  const inputElement = useRef(null)
  useEffect(() => inputElement.current.focus(), [])

  const handleSubmit = (event) => {
    event.preventDefault()
    onChange(inputElement.current.value)
    setIsEditing(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputElement}
        type='text'
        value={inputValue || ''}
        style={style}
        placeholder={placeholder}
        required
        onChange={e => setInputValue(e.target.value)}
        onBlur={handleSubmit}
      />
      <style jsx>{`
        input {
          padding: 0 !important;
          width: 100% !important;
        }
      `}
      </style>
    </form>
  )
}

const EditInPlace = ({ canEdit = true, children, value, placeholder, style, onChange }) => {
  const [isEditing, setIsEditing] = useState(false)
  return (
    <div>
      {isEditing ? (
        <EditForm
          value={value}
          placeholder={placeholder}
          style={style}
          onChange={onChange}
          setIsEditing={setIsEditing}
        />
      ) : (
        <span
          onClick={e => setIsEditing(canEdit)}
        >
          {children}
        </span>
      )}
    </div>
  )
}
export default EditInPlace
