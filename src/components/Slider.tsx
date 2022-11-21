import { useEffect, useState} from 'react';
import arrow from '../assets/arrow_back_ios-24px 2.png';
import { productImages } from '../interfaces';

const Slider = (images:productImages) => {
    const covers:string[] = images.images;
    const [imageIndex,setImageIndex] = useState(0);
    const [pagin, setPageIn] = useState('');
    const slideLeft = () => {
        if(imageIndex > 0) {
            setImageIndex(imageIndex - 1)
        } else {
            setImageIndex(covers.length - 1)
        }
    }

    const slideRight = () => {
        if(imageIndex < covers.length - 1) {
            setImageIndex(imageIndex + 1)
        } else {
            setImageIndex(0)
        }
    }
    
    useEffect(() => {
        setPageIn(`${imageIndex + 1}/${covers.length}`)
    },[imageIndex,covers.length])

    if(covers.length > 1) {
        return(
            <div className="slider">
                <img src={covers[imageIndex]} alt="logement" />
                <img src={arrow} alt="" className='arrow arrow__left' onClick={() => slideLeft()}/>
                <p className="pagin">{pagin}</p>
                <img src={arrow} alt="" className='arrow arrow__right' onClick={() => slideRight()}/>
            </div>
        )
    }
    else {
        return(
            <div className="slider">
                <img src={covers[imageIndex]} alt="logement" />
            </div>
        )
    }
}

export default Slider