import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import ToggleColorMode from "../src/components/DarkMode";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToggleColorMode />
    </BrowserRouter>
  </React.StrictMode>
)
