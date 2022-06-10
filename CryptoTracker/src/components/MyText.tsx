import styled from 'styled-components/native'

interface Props {
  color: string,
  weight: number,
}

export const MyText = styled.Text<Props>`
  color: ${props => props.color};
  font-weight: ${props => props.weight||400};
  text-align:center
`

