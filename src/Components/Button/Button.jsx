/* eslint-disable react/prop-types */
import { Container } from './Button.js'

export function Button({text, isActive=false}){
  return (
    <Container isActive={isActive}>
      {text}
    </Container>
  )
}