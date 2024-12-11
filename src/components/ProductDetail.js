import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { name } = useParams();  // Get the product name from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Decode the name and fetch product details using the name
    const decodedName = decodeURIComponent(name);
    
    axios.get(`http://localhost:3000/api/item/${decodedName}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [name]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.MainImage} alt={product.name} />
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      {/* Other product details */}
    </div>
  );
};

export default ProductDetail;
