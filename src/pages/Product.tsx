import Slider from '../components/Slider';
import products from '../database/db.json';
import { productDatas } from '../interfaces';
import arrow from '../assets/arrow_back_ios-24px 2.png'
import fullStar from '../assets/star_rate-24px 5.svg'
import emptyStar from '../assets/star_rate-24px 2.svg'

const SwitchBar = ({ title }: { title: string }) => {
    return(
        <div className="switchBar">
            <h2>{title}</h2>
            <img src={arrow} alt="" className={"arrow arrow__" + title} />
        </div>
    )
}

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
            <div className='productPage__rating'>
                <div>
                {[...Array(parseInt(product.rating))].map(() => {
                    return(
                        <img src={fullStar} alt='' className='star' />
                    )})}
                {[...Array(5 - parseInt(product.rating))].map(() => {
                    return(
                        <img src={emptyStar} alt='' className='star' />
                    )})}
                </div>
                <div className="host">
                    <span>{product.host.name}</span>
                    <img src={product.host.picture} alt={product.host.name} />
                </div>
            </div>
            <div className="productPage__description">
                <SwitchBar title='Description' />
                <p>{product.description}</p>
            </div>
            <div className="productPage__equipments">
                <SwitchBar title='Équipements' />
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