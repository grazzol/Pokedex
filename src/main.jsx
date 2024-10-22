import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import s from "./index.module.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className={s.font}>
    <App />
  </div>
)
