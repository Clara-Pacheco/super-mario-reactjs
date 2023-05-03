/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

import { Container } from './Button.js'

export function Button({text, isActive=false, url}){
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container
       isActive={isActive}  
       data-aos="fade-up"
       data-aos-delay="600"
       data-aos-duration="800"
       data-aos-easing="ease-in-out"  
    >
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