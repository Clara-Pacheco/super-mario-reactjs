import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

import { Container, Video } from './App.js'

import backgroundVideo from '../assets/background-video.mp4'
import movieLogo from '../assets/logo-movie.png'
import marioAndLuigi from '../assets/mario-and-luigi.png'

import { Header } from '../Components/Header/Header.jsx'
import { MovieInfo } from '../Components/MovieInfo/MovieInfo.jsx'
import { Button } from '../Components/Button/Button.jsx'

export function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
 return (
  <Container>
    <Header />
    <Video
     autoPlay
     loop
     muted
     >
      <source src={backgroundVideo} type="video/mp4" />
    </Video>
    <main>
      <div>
        <MovieInfo
          imgUrl={movieLogo}
          altText='Mario Bross Movie Logo'
          text='Um dia, Mario e Luigi vão para no reino dos
          cogumelos, governado pela Princesa Peach, mas
          ameaçado pelo rei dos Koopas, Bowser, que vai
          fazer de tudo para conseguir reinar todos os lugares.
          É então quando Luigi é raptado por Bowser e o usa para
          procurar Mario, o único capaz de deter o Koopa e
          reestabelexcer a paz.'
        />
       
          <Button
            url='https://www.thesupermariobros.movie/videos/'
            text='Assistir o Trailer'
            isActive
          />
          <Button
            url='https://www.universalpics.com.br/micro/super-mario-bros#iframe1'
            text='Comprar Ingresso'
          />
          
        </div>

        <img 
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="800"
          data-aos-easing="ease-in-out" 
          src={marioAndLuigi}
          alt="Mario and Luigi"
        />
    </main>
 
  </Container>
 )
}


