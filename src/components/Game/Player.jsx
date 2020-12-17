import React from 'react';
import CardBackSide from '../../images/cards/Back.png';


const Player = (props) => {

    return (
        <div className={`player ${props.nameClass}`}>
            <div className="player__cards">
                <img src={CardBackSide} alt=""/>
                <img src={CardBackSide} alt=""/>
            </div>
            <div className="player__nickname">
                {props.nickname ? props.nickname : ""}
            </div>
        </div>
    )
}

export default Player;