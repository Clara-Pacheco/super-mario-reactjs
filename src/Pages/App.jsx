import { Container, Video } from './App.js'

import backgroundVideo from '../assets/background-video.mp4'

import { Header } from '../Components/Header/Header.jsx'

export function App() {
 return (
  <Container>
    <Video
     autoPlay
     loop
     muted
     >
      <source src={backgroundVideo} type="video/mp4" />

    </Video>
    <Header />
 
  </Container>
 )
}


