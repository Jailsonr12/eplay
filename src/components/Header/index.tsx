import { Headerbar, Links, LinkItem, LinkCard } from './styles'

import logo from '../../assets/logo.svg'
import carinho from '../../assets/carrinho.svg'
import { Link } from 'react-router-dom'

const Header = () => (
  <Headerbar>
    <div>
      <Link to={'/'}>
        <img src={logo} alt="Eplay" />
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/categories">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/home">Novidades</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/promotions">Promoção</Link>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCard href="#">
      0 - produto(s) <img src={carinho} alt="Carinho" />
    </LinkCard>
  </Headerbar>
)

export default Header
