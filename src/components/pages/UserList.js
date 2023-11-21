import React from 'react'
import { data } from '../../db'
import { useNavigate } from 'react-router-dom'


const UserList = () => {
    const navigate = useNavigate();
  return (
  
    <div>
      {
        data.users.map(user => 
            <div key={user.id}>
<h5 style={{cursor:"pointer"}}
          onClick={()=> navigate(`user/${user.id}`)}>
          {user.id}: {user.name} and {user.location}</h5>
            </div>)
      }
    </div>
  )
}

export default UserList
