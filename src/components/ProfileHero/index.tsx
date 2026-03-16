import Restaurant from '../../models/Restaurant'
import { HeroContainer, HeroCuisine, HeroTitle } from './styles'

type Props = {
  restaurant: Restaurant
}

const ProfileHero = ({ restaurant }: Props) => (
  <HeroContainer $image={restaurant.capa}>
    <div className="container">
      <HeroCuisine>{restaurant.tipo}</HeroCuisine>
      <HeroTitle>{restaurant.titulo}</HeroTitle>
    </div>
  </HeroContainer>
)

export default ProfileHero
