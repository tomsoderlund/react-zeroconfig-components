import React from 'react'

const ListCard = ({ name, details, imageUrl, image, children }) => {
  return (
    <div className='list-card'>
      <ListCardIcon
        name={name}
        imageUrl={imageUrl}
        image={image}
      />

      <div className='name-details'>
        <div className='name'>{name}</div>
        <div className='details'>{details}</div>
      </div>

      {children}
    </div>
  )
}
export default ListCard

const ListCardIcon = ({ image, imageUrl, name }) => (
  <div className='list-card-icon'>
    {image || (<img src={imageUrl || '/images/user.svg'} alt={name} />)}
  </div>
)
