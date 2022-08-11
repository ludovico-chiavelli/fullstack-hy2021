import React from 'react'

const DeleteButton = ({ 
  handlePersonDeletion, 
  id
}) => {
  const handleClick = () => {
    handlePersonDeletion(id)
  }

  return (
    <button onClick={handleClick}>delete</button>
  )
}

export default DeleteButton