import { useState} from 'react'

const Slider = (images:any) => {
    const [imageIndex,setImageIndex] = useState(0);
    const slide = () => {
        setImageIndex(imageIndex + 1)
    }

    return(
        <div className="slider">
            <img src={images.images[imageIndex]} alt="logement" onClick={() => slide()}/>
        </div>
    )
}

export default Slider