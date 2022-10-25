import products from '../database/db.json';


const Lodging = () => {
    const id = window.location.href.split('/logements/')[1];
    let product;

    for(let i=0; i < products.length; i++) {
        if(products[i].id === id) {
            product = products[i]
        }
    }
    console.log(product);
    return(
        <div>Le logement que je consulte a l'id : {product?.id} </div>
    )
}

export default Lodging