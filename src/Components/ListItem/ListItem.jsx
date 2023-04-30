/* eslint-disable react/prop-types */
import { Container } from './ListItem.js'

export function ListItem({ menuItem }){
  return (
    <Container>
      <a
       href='#'
       target="_blank"
      >
       {menuItem}
      </a>
    </Container>
  )
}