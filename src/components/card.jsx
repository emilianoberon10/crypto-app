import React from 'react';

const Card = ({ data, selected, onClick }) => {

    const {id,name,rate,icon} = data;
    const handleClick = ()=> onClick(data);

    return (
        <div className={`card ${selected && 'selected'}`} onClick={handleClick}>
            <div className="card-body">
                <img src={icon} alt="icon" className="coin-icon"/>
                <div className="">{name}</div>
                <div className="">{rate}</div>
            </div>
        </div>
    );
}
export default Card;