import Restaurant from '../../models/Restaurant'
import Product from '../Product'
import { Container, List, Title } from './styles'

const capitalize = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)

export type Props = {
  title: string
  background: 'black' | 'gray'
  restaurants: Restaurant[]
}

const ProductsList = ({ title, background, restaurants }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {restaurants.map((restaurant) => (
          <Product
            key={restaurant.id}
            id={restaurant.id}
            description={restaurant.descricao}
            image={restaurant.capa}
            rating={restaurant.avaliacao}
            title={restaurant.titulo}
            infos={
              restaurant.destacado
                ? ['Destaque da semana', capitalize(restaurant.tipo)]
                : [capitalize(restaurant.tipo)]
            }
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
