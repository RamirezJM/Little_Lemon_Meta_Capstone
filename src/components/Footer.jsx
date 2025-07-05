import logo from '../assets/footer-logo.png'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/x.svg'


export default function Footer(){
  return(
    <footer id='contact'>
      <img src={logo} alt="restaurant logo"/>
      <section className='contact'>
        <p>7863 Washington Blvd</p>
        <p>Chicago, Illinois</p>
        <p>(872)-768-4233</p>
        <p>littlelemonrestaurant@mail.com</p>
      </section>
      <section className='social'>
        <p>Join us!</p>
        <img src={facebook} alt="facebook icon" />
        <img src={instagram} alt="instagram icon" />
        <img src={twitter} alt="x icon" />

      </section>
      
    </footer>
  )
}