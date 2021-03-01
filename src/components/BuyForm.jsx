import React, { useState, useEffect } from 'react';
import InputBse from './InputBase';

const BuyForm = ({data})=>{

    const {name,rate} = data;
    const INIT = { amount: 0, converted: 0};
    const [exchange, setExchange] = useState(INIT);
    
    useEffect( () => {
        setExchange({
            ...exchange,
            converted: Number(exchange.amount / rate ).toFixed(4)
        })
    }, [name]);

    const handleChange = ({ target: { value, name} }) =>{
      
        const val  = Number(value.trim());
        const converted = (val / rate).toFixed(4);
        
        setExchange({
            [name]: val,
            converted,
        });
    }

    return(
        <form className="form">
            <div className="input-group mb-3">
                <InputBse name="amount" textLabel="USD" onChange={handleChange} />
                <i className="fas fa-exchange-alt" />        
                <InputBse value={exchange.converted} disabled textLabel={name} />        
            </div>
            <input className="btn btn-primary" type="submit" value="PURCHASE" />
        </form>
    )
};
export default  BuyForm