import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import "../css/ItemDetails.css"
// import { gsap } from 'gsap';

const ItemDetails = () => {
    const [items, setItems] = useState([]);
    const { category } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3000/api/category/${category}`)
            .then(response => setItems(response.data))
            .catch(error => console.error(error));
    }, [category]);
    console.log(items)
    console.log(category)
    return (
        <div className='items'>

            {items.map(item => (
                <div className="item-info">
                    <div className='item-img'>
                        <img 
                            src={item.MainImage} 
                            alt={item.name}
                            style={item.category === 'TV' || item.category === 'AC' ? { height: '250px', width: '400px' } : { height: '500px', width: '500' }} 
                        />
                    </div>
                    <div className='item-details'>
                        <h3>{item.name}</h3>
                        <p style={{fontSize:"20px",color:"black"}}>{item.price}<sub style={{color: "black"}}>M.R.P:</sub><sub style={{color: "gray", textDecoratione:"line-through"}}>{item.previousPrice}</sub></p>  
                        <h4>FREE delivery </h4>
                        <p>{item.brand}</p>
                        <button>Buy Now</button>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ItemDetails
