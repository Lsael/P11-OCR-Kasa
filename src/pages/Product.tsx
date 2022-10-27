import Slider from '../components/Slider';
import products from '../database/db.json';
import { productDatas } from '../interfaces';
import arrow from '../assets/arrow_back_ios-24px 2.png'
import fullStar from '../assets/star_rate-24px 5.svg'
import emptyStar from '../assets/star_rate-24px 2.svg'

const Lodging = () => {
    const id = window.location.href.split('/logements/')[1];
    let product!:productDatas;

    for(let i=0; i < products.length; i++) {
        if(products[i].id === id) {
            product = products[i]
        }
    }
    
    return(
        <section>
            <Slider images={product.pictures} />
            <div className="productPage__title">
                <h1>{product.title}</h1>
                <p>{product.location}</p>
                {product.tags.map((tag) => {
                    return(
                        <span className='tagBox'>{tag}</span>
                    )
                })}
            </div>
            <div>
                <div className='productPage__rating'>
                {[...Array(parseInt(product.rating))].map(() => {
                    return(
                        <img src={fullStar} alt='' />
                    )})}
                {[...Array(5 - parseInt(product.rating))].map(() => {
                    return(
                        <img src={emptyStar} alt='' />
                    )})}
                </div>
                <div className="host">
                    <span>{product.host.name}</span>
                    <img src={product.host.picture} alt={product.host.name} />
                </div>
            </div>
            <div className="productPage__description">
                <h2>Description</h2>
                <img src={arrow} alt="" className='arrow arrow__top' />
                <img src={arrow} alt="" className='arrow arrow__bot' />
                <p>{product.description}</p>
            </div>
            <div className="productPage__equipments">
                <h2>Équipements</h2>
                <img src={arrow} alt="" className='arrow arrow__top' />
                <img src={arrow} alt="" className='arrow arrow__bot' />
                <ul className='equipments__list'>{
                product.equipments.map((equipment) => {
                    return(
                        <li>{equipment}</li>
                    )
                })}
                </ul>
            </div>
        </section>
    )
}

export default Lodging