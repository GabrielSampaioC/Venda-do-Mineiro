import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cardapio from './paginas/Cardapio/index.jsx'
import PaginaPadrao from './paginas/PaginaPadrao/index.jsx'
import ScrollToTop from './componentes/ScrollToTop/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<PaginaPadrao/>}>
          <Route path='/' element={<App />}/>
          <Route path='/:id' element={<Cardapio />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
