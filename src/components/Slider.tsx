import { useState} from 'react';
import arrow from '../assets/arrow_back_ios-24px 2.png';
import { productImages } from '../interfaces';

const Slider = (images:productImages) => {
    const [imageIndex,setImageIndex] = useState(0);
    const covers:string[] = images.images;
    
    const slideLeft = () => {
        if(imageIndex > 0) {
            setImageIndex(imageIndex - 1)
        } else {
            setImageIndex(covers.length - 1)
        }
    }

    const slideRight = () => {
        if(imageIndex < (covers.length - 1)) {
            setImageIndex(imageIndex + 1)
        } else {
            setImageIndex(0)
        }
    }

    return(
        <div className="slider">
            <img src={covers[imageIndex]} alt="logement" />
            <img src={arrow} alt="" className='arrow arrow__left' onClick={() => slideLeft()}/>
            <img src={arrow} alt="" className='arrow arrow__right' onClick={() => slideRight()}/>
        </div>
    )
}

export default Slider