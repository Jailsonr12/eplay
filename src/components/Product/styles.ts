import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid ${cores.vermelho};
  color: ${cores.vermelho};
  overflow: hidden;

  img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Content = styled.div`
  padding: 8px;
  position: relative;
  min-height: 217px;
  display: flex;
  flex-direction: column;
`
export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`
export const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`
export const Nota = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 18px;
  font-weight: 700;

  img {
    width: 21px;
    height: 21px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const DetailsButton = styled(Link)`
  width: fit-content;
  background-color: ${cores.vermelho};
  color: ${cores.vermelhoClaro};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
`
