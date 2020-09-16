import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links' // linkTo('Button')

import EditInPlace from '../src/components/EditInPlace'
import '../src/components/common.css'

// ----- Story -----

export default {
  title: 'EditInPlace'
}

export const simple = () => {
  const [text, setText] = useState('This text can be edited')

  const handleChangeText = (text) => {
    action('onChange')(text)
    setText(text)
  }

  return (
    <EditInPlace
      value={text}
      onChange={handleChangeText}
    >
      {text}
    </EditInPlace>
  )
}

export const withOptions = () => {
  const [text, setText] = useState('This headline can be edited')

  const handleChangeText = (text) => {
    action('onChange')(text)
    setText(text)
  }

  return (
    <EditInPlace
      placeholder='Edit headline'
      value={text}
      onChange={handleChangeText}
      canEdit
      style={{ fontSize: '2em', fontWeight: 'bold', margin: '0.5em 0' }}
    >
      <h1>{text}</h1>
    </EditInPlace>
  )
}
