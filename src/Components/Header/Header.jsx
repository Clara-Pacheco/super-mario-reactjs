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
        <ListItem menuItem="Home" />
        <ListItem menuItem="Story" />
        <ListItem menuItem="Wallpapers" />
        <ListItem menuItem="Trailer" />
      </div>
      <div>
          <Social
            url='http://www.facebook.com'
            imgSrc = {facebookLogo}
            textAlt = 'Facebook Logo'
          />
          <Social
            url='http://www.instagram.com'
            imgSrc = {instagramLogo}
            textAlt = 'Instagram Logo'
          />
          <Social
            url='http://www.tiktok.com'
            imgSrc = {tiktokLogo}
            textAlt = 'TikTok Logo'
          />
          <Social
            url='http://www.twitter.com'
            imgSrc = {twitterLogo}
            textAlt = 'Twitter Logo'
          />
          <Social
            url='http://www.youtube.com'
            imgSrc = {youtubeLogo}
            textAlt = 'YouTube Logo'
          />
      </div>
      
 
    </Container>
  )
}