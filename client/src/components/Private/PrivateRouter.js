import jwtDecode from 'jwt-decode';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const PrivateRouter = ({child}) => {
    const navigate=useNavigate()
    const token=localStorage.getItem("token")
    if(!token) return navigate('/')
    console.log(token);
    const user=jwtDecode(token)
    console.log(user);
    const auth_id=user.user.id
    const isuser=user.user.isUser
    console.log(auth_id);
    return auth_id && isuser===true ?child:navigate('/')
  
}

export default PrivateRouter
