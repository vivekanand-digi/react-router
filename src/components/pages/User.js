import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const User = (user) => {
    const navigate = useNavigate();
    const {id} =useParams();
    console.log("id", id);
  return (
    <div>
      <button onClick={()=> navigate(`/`)}> Back 
      </button>
      {/* <h1>
        {user.name}
        {user.location}
      </h1> */}
    </div>
  )
}

export default User
