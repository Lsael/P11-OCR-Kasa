import { homeThumbDatas } from "../interfaces";

const Thumbnail = (productDatas:homeThumbDatas) => {
    return(
    <a href={`/logements/${productDatas.id}`} className='Thumb' >
        <article>
            <img src={productDatas.cover} alt={productDatas.title} />
            <h3>{productDatas.title}</h3>
        </article>
    </a>
    )
}

export default Thumbnail