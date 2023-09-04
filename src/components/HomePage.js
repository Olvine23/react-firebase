import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    let navigate = useNavigate()

    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')
        if(authToken){
            navigate('/home')
        }
        if(!authToken){
            navigate('/login')
        }


    }, [])
  return (
    <div>HomePage</div>
  )
}

export default HomePage