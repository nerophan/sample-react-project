import React from 'react'

import FooterColumn from './components/column'

import './styles.scss'
import IosImage from './images/ios.svg'
import AndroidImage from './images/android.svg'
import FacebookImage from './images/facebook.svg'
import TwitterImage from './images/twitter.svg'
import LinkedinImage from './images/linkedin.svg'
import InstagramImage from './images/instagram.svg'
import YoutubeImage from './images/youtube.svg'

const Footer = () => {
  const menu = [
    {
      title: 'sitename',
      options: [
        'Title One',
        'Title Two',
        'Title Three',
        'Title Four',
        'Title Five',
      ]
    },
    {
      title: 'information',
      options: [
        'Category One',
        'Category Two',
        'Category Three',
        'Category Four',
        'Category Five',
      ]
    },
    {
      title: 'category',
      options: [
        'Category One',
        'Category Two',
        'Category Three',
        'Category Four',
        'Category Five',
      ]
    },
    {
      title: 'contact',
      options: [
        'help@sitename.com',
        'Hotline: +00 123 123',
      ]
    }
  ]
  return (
    <div className='footer'>
      <div className='footer-content'>
        {menu.map(m => <FooterColumn title={m.title} options={m.options} />)}
        <div className='footer-column'>
          <div className='platform-availability'>
            <div>
              <img src={AndroidImage} alt='android' />
            </div>
            <div>
              <img src={IosImage} alt='ios' />
            </div>
          </div>
          <div className='social'>
            <div>
              <img src={FacebookImage} alt='facebook' />
            </div>
            <div>
              <img src={TwitterImage} alt='twitter' />
            </div>
            <div>
              <img src={LinkedinImage} alt='linkedin' />
            </div>
            <div>
              <img src={InstagramImage} alt='instagram' />
            </div>
            <div>
              <img src={YoutubeImage} alt='youtube' />
            </div>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <span>
          © 2020. ALL RIGHTS RESERVED
        </span>
      </div>
    </div>
  )
}

export default Footer