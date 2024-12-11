import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/OrderDetails.css"; // Assume you have some CSS for styling
import { useNavigate } from 'react-router-dom';

const OrderDetails = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      fetchOrderDetails();
    }
  }, [token]);

  // Fetch order details from backend
  const fetchOrderDetails = async () => {
    try {
      const useremail = localStorage.getItem("email");
      const response = await axios.post('http://localhost:3000/api/order-details', { useremail }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setOrderItems(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching order details:', error);
      setLoading(false);
    }
  };

  // Calculate the total price of the order
  const calculateTotalPrice = () => {
    return orderItems.reduce((total, item) => {
      const itemPrice = extractPriceNumber(item.itemId.price);
      return total + (itemPrice * item.quantity);
    }, 0);
  };

  // Function to extract price as a number from string
  const extractPriceNumber = (priceString) => {
    return parseFloat(priceString.replace(/[^0-9.-]+/g, "")); // Remove non-numeric characters
  };

  if (loading) {
    return <p>Loading order details...</p>;
  }

  return (
    <div className="order-details-container">
      <h2>Order Details</h2>
      {orderItems.length === 0 ? (
        <p>No items in this order.</p>
      ) : (
        <div className="order-items">
          {orderItems.map((item) => (
            <div key={item._id} className="order-item">
              <img src={item.itemId.MainImage} alt={item.itemId.name} style={{ height: 200, width: 200 }} className="order-item-image" />
              <div className="order-item-details">
                <h3>{item.itemId.name}</h3>
                <p>Price: {item.itemId.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          
          {/* Total Price */}
          <div className="order-total">
            <h3>Total Price: ₹{calculateTotalPrice().toLocaleString()}</h3>
          </div>

          {/* Go Back Button */}
          <button className="go-back-btn" onClick={() => navigate('/')}>
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
