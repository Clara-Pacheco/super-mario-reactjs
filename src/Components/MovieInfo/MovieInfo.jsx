/* eslint-disable react/prop-types */
import { Container } from './MovieInfo.js'

export function MovieInfo({ imgUrl, altText, text}) {
  return (
    <Container>
      <img 
        src={imgUrl}
        alt={altText}
      />
      <p>{text}</p>
    </Container>
  )
}