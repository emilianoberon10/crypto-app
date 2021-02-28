import React, {useState} from "react";
import Card from "./card";
import btc from '../assets/bitcoin.svg';
import eth from '../assets/ethereum.svg';
import xem from '../assets/xem.jpg';


const Home = () => {

    const cards = [
        { id: 1, icon: btc, name: 'BTC', rate: 33834},
        { id: 2, icon: eth, name: 'ETH', rate: 1394},
        { id: 3, icon: xem, name: 'XEM', rate: 0.2708}
    ];

    const [selectedCard, setSelectedState] = useState(cards[0]);

    const handleSelect = (data) => {
        setSelectedState(data);
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
            <div className="d-flex">
                {
                    cards.map((coin)=>(
                        <Card 
                        key={coin.id} 
                        data={coin} 
                        selected={coin.id === selectedCard.id} 
                        onClick={handleSelect} />
                    ))
                }
            </div>            
        </div>
        <div className="col-6">col 2</div>
      </div>
    </div>
  );
};

export default Home;
