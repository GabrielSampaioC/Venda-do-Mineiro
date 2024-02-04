import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Cardapio from './paginas/Cardapio/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}> </Route>
        <Route path='/cardapio' element={<Cardapio/>}> </Route>
      </Routes>

    </BrowserRouter>

  </React.StrictMode>,
)
