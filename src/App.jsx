import { createContext, useState } from 'react'
import './App.css'
import FirstChild from './components/FirstChild'


export const UserContext = createContext() 

function App() {

  return (
    <>
      
      <div> 
        <UserContext.Provider value={"Rana"} >
        <FirstChild />
        </UserContext.Provider>
      </div>
     
    </>
  )
}

export default App
