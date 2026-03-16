import { Route, Routes } from 'react-router-dom'
import Profile from './pages/Profile'
import Home from './pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/perfil/:id" element={<Profile />} />
    <Route path="*" element={<Home />} />
  </Routes>
)

export default Rotas
