import ProductsList from '../../components/ProductsList'
import ProfileHero from '../../components/ProfileHero'
import Games from '../../models/Games'

import resident from '../../assets/resident.png'
import zelda from '../../assets/zelda.png'
import starWars from '../../assets/star_wars.png'
import diablo from '../../assets/diablo.png'

const RPG: Games[] = [
  {
    id: 1,
    category: 'Acao',
    description: 'Jogo de acao e aventura',
    image: resident,
    title: 'Resident Evil 4',
    system: '4.8',
    infos: ['R$ 199,99', '50% de desconto']
  },
  {
    id: 2,
    category: 'Acao',
    description: 'Jogo de acao e aventura',
    image: zelda,
    title: 'The Legend of Zelda: Breath of the Wild',
    system: '4.7',
    infos: ['R$ 299,99', '30% de desconto']
  },
  {
    id: 3,
    category: 'Acao',
    description: 'Jogo de acao e aventura',
    image: starWars,
    title: 'Star Wars Jedi: Fallen Order',
    system: '4.6',
    infos: ['R$ 149,99', '70% de desconto']
  },
  {
    id: 4,
    category: 'Acao',
    description: 'Jogo de acao e aventura',
    image: diablo,
    title: 'Diablo III',
    system: '4.5',
    infos: ['R$ 89,99', '80% de desconto']
  }
]

const Aventura: Games[] = [
  {
    id: 5,
    category: 'Acao',
    description: 'Jogo de acao e aventura',
    image: resident,
    title: 'Resident Evil 4',
    system: '4.9',
    infos: ['17/05/2024', 'R$ 199,99']
  },
  {
    id: 6,
    category: 'Acao',
    description: 'Jogo de acao e aventura',
    image: zelda,
    title: 'The Legend of Zelda: Breath of the Wild',
    system: '4.8',
    infos: ['11/05/2024', 'R$ 299,99']
  },
  {
    id: 7,
    category: 'Acao',
    description: 'Jogo de acao e aventura',
    image: starWars,
    title: 'Star Wars Jedi: Fallen Order',
    system: '4.7',
    infos: ['17/03/2024', 'R$ 149,99']
  },
  {
    id: 8,
    category: 'Acao',
    description: 'Jogo de acao e aventura',
    image: diablo,
    title: 'Diablo III',
    system: '5.0',
    infos: ['17/05/2028', 'R$ 89,99']
  }
]

const Categories = () => (
  <>
    <ProfileHero />
    <ProductsList title="RPG" background="gray" games={RPG} />
    <ProductsList title="Acao" background="black" games={Aventura} />
    <ProductsList title="Aventura" background="gray" games={RPG} />
    <ProductsList title="FPS" background="black" games={Aventura} />
  </>
)

export default Categories
