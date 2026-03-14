import { Image, Titulo, Preco } from './style'

import bannerImg from '../../assets/banner-homem-aranha.png'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
      <Preco>
        <span>De R$ 250,00 </span> <br /> por apenas R$ 99,90
      </Preco>
    </div>
  </Image>
)

export default Banner
