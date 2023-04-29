import { Container, Video } from './App.js'

import backgroundVideo from '../assets/background-video.mp4'

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
    <h1>Teste</h1>
  </Container>
 )
}


