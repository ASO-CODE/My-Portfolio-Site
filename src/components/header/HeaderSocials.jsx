import React from 'react'
import {BsTwitter, BsLinkedin,BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
      <div className='header__socials'>
          <a href="https://now.com" target='_blank' rel="noreferrer"><BsGithub /></a>
          <a href="https://now.com" target='_blank' rel="noreferrer"><BsLinkedin /></a>
          <a href="https://now.com" target='_blank' rel="noreferrer"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocials