// src/AppHome.tsx

import { Routes, Route } from 'react-router-dom'
import RBNavbar from './components/rb/RBNavbar'
import RBFooter from './components/rb/RBFooter'
import HomeRB from './pages/HomeRB'
import AboutRB from './pages/AboutRB'
import ProyectRB from './pages/ProyectRB'

export default function AppHome() {
  return (
    <>
      <RBNavbar />
      <Routes>
        <Route path="/" element={<HomeRB />} />
        <Route path="/about" element={<AboutRB />} />
        <Route path="/projects" element={<ProyectRB />} />
      </Routes>
      <RBFooter />
    </>
  )
}