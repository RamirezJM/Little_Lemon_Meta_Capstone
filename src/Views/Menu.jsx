import dishesData from '../assets/dishes.json'

export default function Menu() {
  return (
    <section className='Menu'>
      <h1>Menu</h1>
      <p>Discover the vibrant essence of the Mediterranean at Little Lemon. While our roots are in cherished family recipes, we infuse each dish with a modern twist, bringing you the authentic tastes of the coast. Explore our collection where traditional flavors meet fresh, innovative interpretations. Come savor the best of the Mediterranean, reinvented.</p>
      <div className="dishes-grid">
        {dishesData.map(dish => (
          <article key={dish.id} className="dish-card">
            <h3>{dish.name}</h3>
            <img src={dish.image} alt={dish.name} />
            <p>{dish.info}</p>
          </article>
        ))}
      </div>
    </section>
  )
}