import products from '../database/db.json';
import homeBanner from '../assets/home-banner.png'
import Thumbnail from '../components/Thumbnail';
import Layout from './Layout';
import { productDatas } from '../interfaces';

const Home = () => {
  return (
    <Layout>
      <section className='home'>
        <div className="banner banner__home">
          <img src={homeBanner} alt="Montagnes embrumées" />
          <h2><span> Chez vous,&nbsp;</span><span>partout et ailleurs</span></h2>
        </div>
        <div className="thumbnails__Box">
        {
          products.map((productDatas:productDatas) => {
            return(
              <Thumbnail {...productDatas} key={productDatas.id} />
            )
          })
        }
        </div>
      </section>
    </Layout>
  )
}

export default Home;