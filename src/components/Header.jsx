import title from '../assets/logo.jpg'
import Nav from './Nav'


export default function Header() {
  return (
    <header>
      <img src={title} alt="restaurant logo" className='title-logo'/>
      <Nav />
    </header>
  )

}