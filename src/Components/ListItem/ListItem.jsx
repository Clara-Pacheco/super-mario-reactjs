/* eslint-disable react/prop-types */
import { Container } from './ListItem.js'

export function ListItem({ menuItem, url }){
  return (
    <Container>
      <a
       href={url}
       target="_blank"
       rel='noreferrer'
      >
       {menuItem}
      </a>
    </Container>
  )
}