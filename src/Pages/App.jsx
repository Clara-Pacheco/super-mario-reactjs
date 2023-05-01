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
          altText='One day, Mario and Luigi end up in
          the Mushroom Kingdom, ruled by Princess Peach
          but threatened by the King of Koopas, Bowser,
          who will do anything to reign over all the places.
          It is then when Luigi is kidnapped by Bowser and used
          to search for Mario, the only one capable of stopping
          Koopa and restoring peace.'
        />
       
          <Button
            url='https://www.thesupermariobros.movie/videos/'
            text='Watch Trailer'
            isActive
          />
          <Button
            url='https://www.universalpics.com.br/micro/super-mario-bros#iframe1'
            text='Buy Ticket'
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


