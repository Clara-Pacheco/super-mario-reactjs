import { Container } from './Header.js'

import logoCap from '../../assets/logo-cap.png'

import { ListItem } from '../ListItem/ListItem.jsx'
import { Social } from '../Social/Social.jsx'

import facebookLogo  from '../../assets/svg/facebook.svg'
import instagramLogo from '../../assets/svg/instagram.svg'
import tiktokLogo from '../../assets/svg/tiktok.svg'
import twitterLogo from '../../assets/svg/twitter.svg'
import youtubeLogo from '../../assets/svg/youtube.svg'



export function Header() {
  return (
    <Container>
      <div>
        <img src={logoCap} alt="Mario's cap" />
        <ListItem 
          menuItem="Home"
          url="https://www.thesupermariobros.movie/home/"
        />
        <ListItem 
          menuItem="Story"
          url="https://www.thesupermariobros.movie/synopsis/" />
        <ListItem 
          menuItem="Wallpapers"
          url="https://www.thesupermariobros.movie/character-gallery/" />
        <ListItem 
          menuItem="Trailer"
          url="https://www.thesupermariobros.movie/videos/"
        />
      </div>
      <div>
          <Social
            url='https://www.facebook.com/supermariomovie'
            imgSrc = {facebookLogo}
            textAlt = 'Facebook Logo'
          />
          <Social
            url='https://www.instagram.com/supermariomovie/'
            imgSrc = {instagramLogo}
            textAlt = 'Instagram Logo'
          />
          <Social
            url='https://www.tiktok.com/@supermariomovie'
            imgSrc = {tiktokLogo}
            textAlt = 'TikTok Logo'
          />
          <Social
            url='https://twitter.com/supermariomovie'
            imgSrc = {twitterLogo}
            textAlt = 'Twitter Logo'
          />
          <Social
            url='https://www.youtube.com/c/illumination'
            imgSrc = {youtubeLogo}
            textAlt = 'YouTube Logo'
          />
      </div>
      
 
    </Container>
  )
}