export type MenuItem = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

export default Restaurant
