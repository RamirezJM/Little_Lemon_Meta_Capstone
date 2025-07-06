import chefs from '../assets/chefs.jpg'

export default function About() {
  return (
    <main className="About">
      <div className='about-info'>
        <h1>About Us</h1>
        <p>We are Mario and Adrian, two Italian brothers who moved to the United States to pursue our shared dream of owning a restaurant.</p>
        <p>To bring our vision to life, I (Mario) combined my passion for cooking with Adrian's expertise in marketing, resulting in the perfect blend of delicious food and a welcoming atmosphere. Our goal is to share the authentic flavors of the Mediterranean with a modern twist, creating a memorable dining experience for every guest.</p>
        <p>At Little Lemon, every dish tells a story of tradition and innovation. We meticulously select fresh, local ingredients, transforming classic Mediterranean recipes into delightful culinary experiences. From our vibrant salads to our rich, savory mains, we strive to transport you to the sun-drenched coasts with every bite, ensuring a truly unforgettable journey for your palate.</p>
      </div>
      <img src={chefs} alt="chefs owners" />
    </main>
  )
}