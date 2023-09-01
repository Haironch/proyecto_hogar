import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Children from './pages/Children'
import Games from './pages/Games'
import AdminPanel from './pages/AdminPanel'
import AdminPanelSelectedChild from './pages/AdminPanelSelectedChild'
import './App.css'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <BrowserRouter>
      <Routes>

      <Route path='/' element={<Login/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/admin/panel' element={<AdminPanel />}/>
      <Route path='/admin/panel/:childId' element={<AdminPanelSelectedChild />}/>
      <Route path='/admin/:childId' element={<Children/>}/>
      <Route path='/admin/:childId/juego/:gameId' element={<Games />}/>
      <Route path='/menu' element={<h1>menu</h1>}/>
      <Route path='/juegonumerico' element={<h1>juegonumerico</h1>}/>
      <Route path='/juegogeometrico' element={<h1>juegogeometrico</h1>}/>
      <Route path='/juegoabc' element={<h1>juegoabc</h1>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
