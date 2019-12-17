import React from 'react'

const XButton = ({ onClose }) => <button className='x-button' onClick={event => onClose && onClose(event)} />

export default ({ children, visible = true, layer = 0, onClose, className }) => {
  return (
    <div
      className={'card ' + (visible ? 'visible ' : '') + (layer ? `canBeClosed layer${layer} ` : '') + (className || '')}
    >
      {layer > 0 ? <XButton onClose={onClose} /> : null}
      {children}
    </div>
  )
}
