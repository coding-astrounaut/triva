
import './App.css'
import React from 'react'
import StartPage from './pages/startPage'

function App() {

  const [logIn] = React.useState(false);
  logIn ? console.log("true") : console.log("false")

  return (
    <StartPage />
  )
}

export default App
