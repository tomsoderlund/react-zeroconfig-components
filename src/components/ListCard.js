import React from 'react'

const ListCard = ({ name, details, imageUrl, children }) => {
  return (
    <div className='list-card'>
      <ListCardIcon name={name} imageUrl={imageUrl} />

      <div className='name-details'>
        <div className='name'>{name}</div>
        <div className='details'>{details}</div>
      </div>

      {children}
    </div>
  )
}
export default ListCard

const ListCardIcon = ({ imageUrl, name }) => (
  <img className='list-card-icon' src={imageUrl || '/images/user.svg'} alt={name} />
)
