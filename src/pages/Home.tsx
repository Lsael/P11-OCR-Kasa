// @ts-nocheck
import products from '../database/db.json';
import homeBanner from '../assets/home-banner.png'
import Thumbnail from '../components/Thumbnail';
import Layout from './Layout';
import { productDatas } from '../interfaces';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <Layout>
      <section className='home'>
        <Banner src={homeBanner} alt="Montagnes embrumées" text="Chez vous, partout et ailleurs" />
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