import products from '../database/db.json';
import homeBanner from '../assets/home-banner.png'

const Home = () => {
  return (
    <section className='home'>
      <div className="banner home__banner">
        <img src={homeBanner} alt="Montagnes embrumées" />
        <h2>Chez vous,<br/> partout et ailleurs</h2>
      </div>
      {
        products.map((product) => {
          return(
            <a href={`/logements/${product.id}`} className='Thumb'>
              <article>
                  <img src={product.cover} alt={product.title} />
                  <h3>{product.title}</h3>
              </article>
            </a>
          )
        })
      }
    </section>
  )
}

export default Home;