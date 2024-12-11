import React, { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';
import "../css/ItemDetails.css";

const ACDetail = () => {
    const [items, setItems] = useState([]);
    const { AC } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/AC/${AC}`)
            .then(response => setItems(response.data))
            .catch(error => console.error(error));
    }, [AC]);

    

    return (
        <div className='items'>
            {items.map(item => (
                <div className="item-info" key={item.id}>
                    <div className='item-img'>
                        <img 
                            src={item.MainImage} 
                            alt={item.name}
                            style={item.category === 'TV' || item.category === 'AC' ? { height: '250px', width: '400px' } : { height: '500px', width: '500px' }} 
                        />
                    </div>
                    <div className='item-details'>
                        <h3>{item.name}</h3>
                        <p style={{fontSize: "20px", color: "black"}}>
                            {item.price}
                            <sub style={{color: "black"}}>M.R.P:</sub>
                            <sub style={{color: "black", textDecoration: "line-through"}}>{item.previous_price}</sub>
                        </p>  
                        <h4>FREE delivery</h4>
                        <p>{item.brand}</p>
                        <button><Link to={`/acName/${item.name}`}> Buy Now</Link></button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ACDetail;
