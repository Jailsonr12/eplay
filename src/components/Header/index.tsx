import { Headerbar, Links, LinkItem, LinkCard } from './styles'

import logo from '../../assets/logo.svg'
import carinho from '../../assets/carrinho.svg'

const Header = () => (
  <Headerbar>
    <div>
      <img src={logo} alt="Eplay" />
      <nav>
        <Links>
          <LinkItem>
            <a href="#">Categorias</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Nocidades</a>
          </LinkItem>
          <LinkItem>
            <a href="">Promoção</a>
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
