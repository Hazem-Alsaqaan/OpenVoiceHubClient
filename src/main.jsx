import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HashRouter } from "react-router-dom"
import {Provider} from "react-redux"
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <HashRouter basename='/'>
    <App />
    </HashRouter>
    </Provider>
  </React.StrictMode>,
)
