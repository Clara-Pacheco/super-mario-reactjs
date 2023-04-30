/* eslint-disable react/prop-types */
import { Container } from './Button.js'

export function Button({text, isActive=false, url}){
  return (
    <Container isActive={isActive}>
      <a 
        href={url}
        target='_blank'
        rel='noreferrer'
      >
      {text}
      </a>
    </Container>
  )
}