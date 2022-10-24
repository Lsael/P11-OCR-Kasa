import products from '../database/db.json';
import homeBanner from '../assets/home-banner.png'

const Home = () => {
  return (
    <section>
      <div className="banner home__banner">
        <img src={homeBanner} alt="Montagnes embrumées" />
        <h2>Chez vous,<br/> partout et ailleurs</h2>
      </div>
      {
        products.map((product) => {
          return(
            <article className='.Thumb'>
              <img src={product.cover} alt={product.title} />
              <h3>{product.title}</h3>
            </article>
          )
        })
      }
    </section>
  )
}

export default Home;