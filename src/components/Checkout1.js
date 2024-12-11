import React from 'react';
import { useLocation } from 'react-router-dom';
import "../css/Checkout.css"; // Add your styles here

const Checkout1 = () => {
  const location = useLocation();
  const { items, totalPrice } = location.state || { items: [] };
  console.log(items);

  return (
    <div className="checkout">
      <h2>Thank you for your purchase!</h2>
      <div className="checkout-details">
        <h3>Order Summary</h3>
        <table className="checkout-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>1</td> {/* Assuming 1 quantity per product. You can adjust if needed */}
                <td>{item.price}</td>
              </tr>
            ))}
            <tr>
              <td colSpan="2"><strong>Total Price</strong></td>
              <td><strong>{items[0].price}</strong></td>
            </tr>
          </tbody>
        </table>
        <p className="thank-you-msg">Thank you for buying this product!</p>
      </div>
    </div>
  );
};

export default Checkout1;
