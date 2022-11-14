import { useEffect, useState } from 'react';
import arrow from '../assets/arrow_back_ios-24px 2.png'

const SwitchBar = ({ title }: { title: string }) => {
    const [arrowState, setArrowState] = useState(false);
    const switchOnClick = () => {
        setArrowState(arrowState ? false : true) 
    } 
    useEffect(() => {
        const icone:HTMLElement = document.querySelector(".switchBar__" + title + "> img")!
        const box:HTMLElement = document.querySelector(".switchBar__" + title + "+ .box")!
        if(arrowState === true) {
            icone.style.transform = "rotate(-90deg)";
            box.style.visibility = "hidden"
            box.style.height = "0"
        } else {
            icone.style.transform = "rotate(90deg)";
            box.style.visibility = "visible";
            box.style.height = "80%"
        }
    }, [arrowState, title])

    return(
        <div className={"switchBar switchBar__" + title} onClick={switchOnClick}>
            <h2>{title}</h2>
            <img src={arrow} alt="" className={"arrow arrow__" + title}  />
        </div>
    )
}

export default SwitchBar