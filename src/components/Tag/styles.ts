import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.verde};
  color: ${cores.branca};
  font-size: ${(props) => (props.size === 'small' ? '12px' : '16px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'small' ? '4px 6px' : '8px 16px')};
  border-radius: 8px;
  display: inline-block;
`
