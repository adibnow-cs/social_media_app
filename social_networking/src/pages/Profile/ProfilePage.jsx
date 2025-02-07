import React from 'react'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {
  const {id}= useParams()
     // access ID using useParams
  return (
    <div>Profile - {id}</div>
  )
}

export default ProfilePage