import React from 'react'
// import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links' // linkTo('Button')

import ListCard from '../src/components/ListCard'
import '../src/components/ListCard.css'
import '../src/components/common.css'

// ----- Story -----

export default {
  title: 'ListCard'
}

export const standard = () => {
  return (
    <div className='ListCardContainer' style={{ backgroundColor: 'lightgray', padding: '1em' }}>
      <ListCard
        name='Sam Lowry'
        details='Main character'
        imageUrl='https://pbs.twimg.com/profile_images/943955598718017536/XVuOSUzc_400x400.jpg'
      >
        <button>Edit</button>
        <button>Delete</button>
      </ListCard>

      <ListCard
        name='Jill Layton'
        details='Main character'
        imageUrl='https://miro.medium.com/max/800/1*KgS8OcADTJ7iv2zF1C3ZAw.jpeg'
      >
        <button>Edit</button>
        <button>Delete</button>
      </ListCard>

      <ListCard
        name='Mr. Kurtzmann'
        details='Secondary character'
        imageUrl='https://assets.mycast.io/characters/mr-kurtzman-1364907-normal.jpg'
      >
        <button>Edit</button>
        <button>Delete</button>
      </ListCard>
    </div>
  )
}
