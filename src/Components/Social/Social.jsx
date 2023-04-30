/* eslint-disable react/prop-types */
import { Container } from './Social.js'

export function Social({ url, imgSrc, textAlt}) {
  return (
    <Container>
      <a 
        href={url}
        target="_blank"
        rel='noreferrer'
      >
      <img
        src={imgSrc}
        alt={textAlt}
      />
      </a>
    </Container>
  )
}