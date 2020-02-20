import React, { useState } from 'react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links' // linkTo('Button')

import Card from '../src/components/Card'
import '../src/components/Card.css'
import '../src/components/common.css'

// ----- Story -----

export default {
  title: 'Card'
}

export const strings = () => {
  const [cards, setCards] = useState({
    company: false,
    person: false
  })

  const toggleCard = (event, cardId) => {
    event.preventDefault()
    setCards(Object.assign({}, cards, { [cardId]: !cards[cardId] }))
  }

  return (
    <div className='CardContainer'>
      <Card>
        <h3>Companies</h3>
        <p>
          <a onClick={e => toggleCard(e, 'company')} href='#'>
            Company X
          </a>
        </p>
        <p>Company Y</p>
        <p>Company Z</p>
        <p>Company 1</p>
        <p>Company 2</p>
        <p>Company 3</p>
        <p>Company 4</p>
        <p>Company 5</p>
        <p>Company 6</p>
        <p>Company 7</p>
      </Card>

      <Card
        layer={1}
        visible={cards.company}
        onClose={e => toggleCard(e, 'company')}
      >
        <h3>Company X</h3>
        <p>
          <a onClick={e => toggleCard(e, 'person')} href='#'>
            Person Y
          </a>
        </p>
        <p>Person Z</p>
      </Card>

      <Card
        layer={2}
        visible={cards.person}
        onClose={e => toggleCard(e, 'person')}
      >
        <h3>Person Y</h3>
        <p>Email:</p>
        <p>Phone:</p>
      </Card>
    </div>
  )
}
