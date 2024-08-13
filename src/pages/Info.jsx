import React from 'react'
import { Link } from 'react-router-dom';

const Info = () => {
  const token = localStorage.getItem('token');
  console.log(token)
  if(token)
  return (
    <div>Info</div>
  )
  else return (
    <div>
      Not Authorized !! 
      <Link to="/">Go to Login Page </Link>
    </div>
  )
}

export default Info