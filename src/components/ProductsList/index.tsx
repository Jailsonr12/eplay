import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
}

const ProductsList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          description="teste"
          image="https://placehold.co/222x250"
          system="Windows"
          title="Nome do jogo"
          infos={['-10%', 'R$ 150,00']}
        />
        <Product
          category="Ação"
          description="teste"
          image="https://placehold.co/222x250"
          system="Windows"
          title="Nome do jogo"
          infos={['-10%', 'R$ 150,00']}
        />
        <Product
          category="Ação"
          description="teste"
          image="https://placehold.co/222x250"
          system="Windows"
          title="Nome do jogo"
          infos={['-10%', 'R$ 150,00']}
        />
        <Product
          category="Ação"
          description="teste"
          image="https://placehold.co/222x250"
          system="Windows"
          title="Nome do jogo"
          infos={['-10%', 'R$ 150,00']}
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
