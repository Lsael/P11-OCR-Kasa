import Slider from '../components/Slider';
import products from '../database/db.json';

const Lodging = () => {
    const id = window.location.href.split('/logements/')[1];
    let product;

    for(let i=0; i < products.length; i++) {
        if(products[i].id === id) {
            product = products[i]
        }
    }

    return(
        <section>
            <p>Le logement que je consulte a l'id : {product?.id}</p> 
            <Slider images={product?.pictures} />
            <div className="productPage__title">
                <h1>{product?.title}</h1>
                <p>{product?.location}</p>
                {product?.tags.map((tag) => {
                    return(
                        <span className='tagBox'>{tag}</span>
                    )
                })}
            </div>
            <div>
                <div className='rating'>{product?.rating}</div>
                <div className="host">
                    <span>{product?.host.name}</span>
                    <img src={product?.host.picture} alt={product?.host.name} />
                </div>
            </div>
        </section>
    )
}

export default Lodging