import { Route, Routes } from 'react-router-dom'
import Categories from './pages/Categories'
import Home from './pages/Home'

const Rotas = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/perfil/:id" element={<Categories />} />
    <Route path="*" element={<Home />} />
  </Routes>
)

export default Rotas
