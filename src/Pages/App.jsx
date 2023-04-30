import { Container, Video } from './App.js'

import backgroundVideo from '../assets/background-video.mp4'
import movieLogo from '../assets/logo-movie.png'
import marioAndLuigi from '../assets/mario-and-luigi.png'

import { Header } from '../Components/Header/Header.jsx'
import { MovieInfo } from '../Components/MovieInfo/MovieInfo.jsx'

export function App() {
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

        <img 
          src={marioAndLuigi}
          alt="Mario and Luigi"
        />
    </main>
 
  </Container>
 )
}


