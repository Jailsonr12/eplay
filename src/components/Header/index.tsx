import { Link, useLocation } from 'react-router-dom'

import logo from '../../assets/logo.png'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { openCart } from '../../store/reducers/cart'
import {
  CompactHeaderBar,
  CompactHeaderContent,
  Headerbar,
  HeroTitle,
  Logo,
  TopButton,
  TopLink
} from './styles'

const Header = () => {
  const { pathname } = useLocation()
  const dispatch = useAppDispatch()
  const totalItems = useAppSelector((state) => state.cart.items.length)
  const isProfilePage = pathname.startsWith('/perfil/')

  if (isProfilePage) {
    return (
      <CompactHeaderBar>
        <div className="container">
          <CompactHeaderContent>
            <TopLink to="/">Restaurantes</TopLink>
            <Link to="/">
              <Logo src={logo} alt="efood" />
            </Link>
            <TopButton type="button" onClick={() => dispatch(openCart())}>
              {totalItems} produto(s) no carrinho
            </TopButton>
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
