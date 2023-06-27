import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/app.scss'
import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';


export const server = "https://node-todoapp-16w4.onrender.com/api/v1";
export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({})
  

  return (
    <Context.Provider
      value={
        {
          isAuthenticated,
          setIsAuthenticated,
          loading, setLoading,
          user, setUser
        }
      }
      >
      <App />
    </Context.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </React.StrictMode>,
)
