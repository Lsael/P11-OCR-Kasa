import Slider from '../components/Slider';
import products from '../database/db.json';
import { productDatas } from '../interfaces';
import { useEffect, useState } from 'react';
import arrow from '../assets/arrow_back_ios-24px 2.png'
import fullStar from '../assets/star_rate-24px 5.svg'
import emptyStar from '../assets/star_rate-24px 2.svg'
import Layout from './Layout';

const SwitchBar = ({ title }: { title: string }) => {
    const [arrowState, setArrowState] = useState(false);
    const switchOnClick = () => {
        setArrowState(arrowState ? false : true) 
    } 
    useEffect(() => {
        const icone:HTMLElement = document.querySelector(".arrow__" + title)!
/*         const box:HTMLElement = document.querySelector(".arrow__" + title + "~ .box")! */
        if(arrowState === true) {
            icone.style.transform = "rotate(0deg)";
/*             box.style.visibility = "visible"; */
        } else {
            icone.style.transform = "rotate(180deg)";
/*             box.style.visibility = "hidden"; */
        }
    }, [arrowState, title])

    return(
        <div className="switchBar">
            <h2>{title}</h2>
            <img src={arrow} alt="" className={"arrow arrow__" + title} onClick={switchOnClick} />
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
        <Layout>
            <section>
                <Slider images={product.pictures} />
                <div className="productPage__title">
                    <h1>{product.title}</h1>
                    <p>{product.location}</p>
                    {product.tags.map((tag,index) => {
                        return(
                            <span key={index} className='tagBox'>{tag}</span>
                        )
                    })}
                </div>
                <div className='productPage__rating'>
                    <div>
                    {[...Array(parseInt(product.rating))].map((data,index) => {
                        return(
                            <img key={index} src={fullStar} alt='' className='star' />
                        )})}
                    {[...Array(5 - parseInt(product.rating))].map((data,index) => {
                        return(
                            <img key={index} src={emptyStar} alt='' className='star' />
                        )})}
                    </div>
                    <div className="host">
                        <span>{product.host.name}</span>
                        <img src={product.host.picture} alt={product.host.name} />
                    </div>
                </div>
                <div className="productPage__description">
                    <SwitchBar title='Description' />
                    <p className='box'>{product.description}</p>
                </div>
                <div className="productPage__equipments">
                    <SwitchBar title='Équipements' />
                    <ul className={'equipments__list box'}>{
                    product.equipments.map((equipment,index) => {
                        return(
                            <li key={index}>{equipment}</li>
                        )
                    })}
                    </ul>
                </div>
            </section>
        </Layout>
    )
}


export default Lodging