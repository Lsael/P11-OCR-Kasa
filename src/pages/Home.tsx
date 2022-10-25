import products from '../database/db.json';
import homeBanner from '../assets/home-banner.png'
import Thumbnail from '../components/Thumbnail';

const Home = () => {
  return (
    <section className='home'>
      <div className="banner home__banner">
        <img src={homeBanner} alt="Montagnes embrumées" />
        <h2>Chez vous,<br/> partout et ailleurs</h2>
      </div>
      {
        products.map((productDatas) => {
          return(
            <Thumbnail {...productDatas} key={productDatas.id} />
          )
        })
      }
    </section>
  )
}

export default Home;