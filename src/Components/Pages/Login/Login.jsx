import React from 'react'
import { useNavigate } from 'react-router'

function Login() {

    const navigate = useNavigate();



  return (
      <div>
          <div>
              <button onClick={()=>navigate(-1)}>Back</button>
          </div>
    </div>
  )
}

export default Login