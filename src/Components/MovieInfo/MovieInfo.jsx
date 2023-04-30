/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

import { Container } from './MovieInfo.js'

export function MovieInfo({ imgUrl, altText, text}) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <img 
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        src={imgUrl}
        alt={altText}
      />
      <p
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
      >
        {text}

      </p>
    </Container>
  )
}