import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'title' | 'restaurants'>>`
  padding: 80px 0px 120px 0px;
  background-color: ${(props) =>
    props.background === 'gray' ? cores.pessegoClaro : cores.preto};
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 40px;
  color: ${cores.vermelho};
`
