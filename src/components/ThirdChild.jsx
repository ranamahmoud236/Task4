import React from 'react'
import { UserContext } from '../App'

const ThirdChild = () => {
  return (
    <div>
        <UserContext.Consumer>
            {(user)=>{
                return <h1>My name is {user}</h1>
            }}
        </UserContext.Consumer>
    </div>
  )
}

export default ThirdChild
