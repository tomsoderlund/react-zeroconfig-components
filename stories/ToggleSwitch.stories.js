import React, { useState } from 'react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links' // linkTo('Button')

import ToggleSwitch from '../src/components/ToggleSwitch'
import '../src/components/ToggleSwitch.css'
import '../src/components/common.css'

// ----- Story -----

export default {
  title: 'ToggleSwitch'
}

export const simple = () => {
  const [selected, setSelected] = useState(false)

  return (
    <ToggleSwitch
      value={selected}
      onChange={value => setSelected(value)}
    />
  )
}

export const inline = () => {
  const [selected, setSelected] = useState(false)

  return (
    <>
      This is an inline
      <ToggleSwitch
        value={selected}
        onChange={value => setSelected(value)}
      />
      switch.
    </>
  )
}
