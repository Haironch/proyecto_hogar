import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'sweetalert2/src/sweetalert2.scss'
import { setAxiosSettings } from './utils/helpers.js'

//setAxiosSettings();

// axios.defaults.baseURL = "http://localhost:5000"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
