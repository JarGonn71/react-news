import React from 'react'
import {AiFillHeart} from "react-icons/ai"
import {BsChatSquareFill} from "react-icons/bs"
import './Card.scss'

const Card = ({title, description, urlToImage, url}) => {

    return (
        <div className="Card">
            <div className="Card__BoxImage">

                <img src={urlToImage? urlToImage :"https://www.clearwallpaper.com/wp-content/uploads/2020/11/wave-wallpaper-0084-1536x864.jpg"} alt="img__card-news" />
                <div className="Card__Btn">
                    <div className="item">
                        <AiFillHeart />
                    </div>
                    <div className="item">
                        <BsChatSquareFill />
                        <span>42</span>
                    </div>
                </div>
            </div>
            <div className="Card__info">
                <p>{title}</p>
                <span>Politico</span>
                <div className="Card__description">
                {description}   
                </div>
            </div>
            <a className="Card__link" href={url} target="_blank" rel='noopener noreferrer' >
                Перейти
            </a>

        </div>
    )
}

export default Card
