import { useRef } from 'react'

import { Container } from './Header.js'

import logoCap from '../../assets/logo-cap.png'

import { ListItem } from '../ListItem/ListItem.jsx'
import { Social } from '../Social/Social.jsx'

import { FaBars, FaTimes } from 'react-icons/fa'

import facebookLogo  from '../../assets/svg/facebook.svg'
import instagramLogo from '../../assets/svg/instagram.svg'
import tiktokLogo from '../../assets/svg/tiktok.svg'
import twitterLogo from '../../assets/svg/twitter.svg'
import youtubeLogo from '../../assets/svg/youtube.svg'



export function Header() {
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  // const navBtn = {
  //   padding: "5px",
  //   fontSize: "35px",
  //   marginTop: "10px",
  //   cursor: "pointer",
  //   background: "transparent",
  //   color:"#E0E0E1",
  //   border: "none",
  //   outline: "none",
  //   visibility: "hidden",
  //   opacity: "0",
  // }

  // const navCloseBtn = {

  // }

  return (
    <Container>
      <nav ref={navRef}>
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
            <button
              // style={navBtn}
              onClick={showNavbar}
            >
              <FaTimes />
            </button>
        </div>
      </nav>
          <button
            // style={navCloseBtn}
            onClick={showNavbar}
          >
            <FaBars />

          </button>
    </Container>
  )
}