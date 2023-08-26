import './WelcomePage.scss'
import { PageContent } from './PageContent'

export const WelcomePage = () => (
  <PageContent>
    <div className='welcome__container'>
      <p className='welcome__greeting'>Welcome to</p>
      <h1 className='welcome__title'>Star Wars API - frontend</h1>
      <p className='welcome__info'> Choose a character to get more Information</p>
      <a href='https://swapi.dev/' target='_blank' className='welcome__link'>
        SWAPI documentation
      </a>
    </div>
  </PageContent>
)
