import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/logo.png'
import {
  CompactHeaderBar,
  CompactHeaderContent,
  Headerbar,
  HeroTitle,
  Logo,
  TopLink
} from './styles'

const Header = () => {
  const { pathname } = useLocation()
  const isProfilePage = pathname === '/categories'

  if (isProfilePage) {
    return (
      <CompactHeaderBar>
        <div className="container">
          <CompactHeaderContent>
            <TopLink to="/categories">Restaurantes</TopLink>
            <Link to="/">
              <Logo src={logo} alt="efood" />
            </Link>
            <TopLink to="#">0 produto(s) no carrinho</TopLink>
          </CompactHeaderContent>
        </div>
      </CompactHeaderBar>
    )
  }

  return (
    <Headerbar>
      <div className="container">
        <Link to="/">
          <Logo src={logo} alt="efood" />
        </Link>
        <HeroTitle>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </HeroTitle>
      </div>
    </Headerbar>
  )
}

export default Header
