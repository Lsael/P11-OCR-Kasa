import { bannerProps } from "../interfaces"

const Banner = (props:bannerProps) => {
    if(props.text) {
        return(
            <div className="banner banner__text">
                <img src={props.src} alt={props.alt} />
                <h2>{props.text}</h2>
            </div>
        )
    } else {
        return(
            <div className="banner banner__no-text">
                <img src={props.src} alt={props.alt} />
            </div>
        )
    }
}

export default Banner