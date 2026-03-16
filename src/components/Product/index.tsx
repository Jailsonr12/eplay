import Tag from '../Tag'
import {
  Card,
  Content,
  Descricao,
  DetailsButton,
  Infos,
  Nota,
  TopLine,
  Titulo
} from './styles'

import estrela from '../../assets/estrela.png'

type Props = {
  id: number
  title: string
  rating: number
  description: string
  infos: string[]
  image: string
}

const Product = ({
  id,
  title,
  rating,
  description,
  infos,
  image
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Content>
      <TopLine>
        <Titulo>{title}</Titulo>
        <Nota>
          <span>{rating}</span>
          <img src={estrela} alt="estrela" />
        </Nota>
      </TopLine>

      <Descricao>{description}</Descricao>
      <DetailsButton to={`/perfil/${id}`}>Saiba mais</DetailsButton>
    </Content>
  </Card>
)

export default Product
