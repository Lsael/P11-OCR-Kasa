import { useState} from 'react';
import arrow from '../assets/arrow_back_ios-24px 2.png';

const Slider = (images:any) => {
    const [imageIndex,setImageIndex] = useState(0);
    const slide = () => {
        setImageIndex(imageIndex + 1)
    }

    return(
        <div className="slider">
            <img src={images.images[imageIndex]} alt="logement" onClick={() => slide()}/>
            <img src={arrow} alt="" className='arrow arrow__left' />
            <img src={arrow} alt="" className='arrow arrow__right' />
        </div>
    )
}

export default Slider