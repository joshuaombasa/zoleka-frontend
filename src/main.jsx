import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { formContext } from './context/formContextProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <formContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </formContext>,
)
