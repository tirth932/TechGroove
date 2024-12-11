// ProductCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../css/ItemDetails.css"

const ProductCard = ({ item }) => {
  return (
    <div className="item-info">
      <div className='item-img'>
        <img 
          src={item.MainImage} 
          alt={item.name} 
          style={item.category === 'TV' || item.category === 'AC' ? { height: '250px', width: '400px' } : { height: '500px', width: '500px' }}
        />
      </div>
      <div className='item-details'>
        <h3>{item.name}</h3>
        <p style={{ fontSize: "20px", color: "black" }}>
          {item.price}
          <sub style={{ color: "black" }}>M.R.P:</sub>
          <sub style={{ color: "gray", textDecoration: "line-through" }}>{item.previousPrice}</sub>
        </p>
        <h4>FREE delivery</h4>
        <p>{item.brand}</p>
        <Link to={`/phoneName/${item.name}`}><button style={{color:"red"}}>Buy Now</button></Link>
      </div>
    </div>
  );
};

export default ProductCard;
