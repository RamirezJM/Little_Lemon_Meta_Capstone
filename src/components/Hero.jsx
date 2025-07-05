import heroSm from '../assets/hero-sm.jpg'
import heroLg from '../assets/hero-lg.jpg'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (

    <div className="hero" role="hero">
      <div className='hero-info'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned a mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className='cta-btn'>
          <Link to='/Reserve'>Reserve a table</Link>
        </button>
      </div>
      <picture>
        <source srcSet={heroLg} media='(min-width:750px)'/>
        <img src={heroSm} alt="hero image" />
      </picture>

    </div>
  )
}