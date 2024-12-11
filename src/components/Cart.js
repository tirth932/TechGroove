import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../css/Cart.css";
import { useNavigate } from 'react-router-dom'; // For navigation

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token'); // Retrieve JWT from localStorage
  const navigate = useNavigate(); // Use for navigation to another page

  useEffect(() => {
    if (token) {
      fetchCartItems();
    }
  }, [token]);
  const handleCheckout = () => {
    const totalPrice = calculateTotalPrice();
    navigate('/checkout', { state: { cartItems, totalPrice } });
  };
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);
  
 
  // Fetch cart items from the backend
  const fetchCartItems = async () => {
    try {
      const useremail = localStorage.getItem("email");
      const response = await axios.post('http://localhost:3000/api/cart', { useremail }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCartItems(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cart items:', error);
      setLoading(false);
    }
  };

  // Handle increasing quantity
  const handleIncreaseQuantity = async (itemId, currentQuantity) => {
    try {
      const useremail = localStorage.getItem("email");
      const newQuantity = currentQuantity + 1;

      const response = await axios.post('http://localhost:3000/api/cart/update-quantity', {
        useremail,
        itemId,
        quantity: newQuantity
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Update the cart display after quantity increase
      setCartItems(response.data.cart);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  // Handle decreasing quantity
  const handleDecreaseQuantity = async (itemId, currentQuantity) => {
    try {
      const useremail = localStorage.getItem("email");
      const newQuantity = currentQuantity - 1;

      const response = await axios.post('http://localhost:3000/api/cart/update-quantity', {
        useremail,
        itemId,
        quantity: newQuantity
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Update the cart display after quantity decrease or removal
      setCartItems(response.data.cart);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  // Handle removing item from cart
  const handleRemoveFromCart = async (itemId) => {
    try {
      const useremail = localStorage.getItem("email");
      await axios.post('http://localhost:3000/api/cart/remove', { useremail, itemId }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // Update the cart display after removing the item
      setCartItems(cartItems.filter(item => item.itemId.name !== itemId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  // Function to convert price string to number
  const extractPriceNumber = (priceString) => {
    return parseFloat(priceString.replace(/[^0-9.-]+/g, "")); // Remove non-numeric characters
  };

  // Calculate the total price of all cart items
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = extractPriceNumber(item.itemId.price);
      return total + (itemPrice * item.quantity);
    }, 0);
  };

  // Handle the proceed button click
  const handleProceed = () => {
    const productName = cartItems.length > 0 ? cartItems[0].itemId.name : "product";
    navigate(`/thank-you`, { state: { productName } }); // Navigate to thank you page with product name
  };

  if (loading) {
    return <p>Loading cart items...</p>;
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.itemId.MainImage} alt={item.itemId.name} style={{ height: 400, width: 400 }} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 style={{ color: "black" }}>{item.itemId.name}</h3>
                <p>Price: {item.itemId.price}</p>
                <p>Quantity: 
                <button className="quantity-btn" onClick={() => handleDecreaseQuantity(item.itemId.name, item.quantity)}>-</button>
                {item.quantity}
                <button className="quantity-btn" onClick={() => handleIncreaseQuantity(item.itemId.name, item.quantity)}>+</button>
                </p>
                <button className="remove-item" onClick={() => handleRemoveFromCart(item.itemId.name)}>
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}

          {/* Total Price Section */}
          <div className="cart-total">
            <h3>Total Price: ₹{calculateTotalPrice().toLocaleString()}</h3>
          </div>

          {/* Proceed Button */}
          <button className="proceed-btn" onClick={handleCheckout}>
            Proceed
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "../css/Cart.css";
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const token = localStorage.getItem('token');
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (token) {
//       fetchCartItems();
//     }
//   }, [token]);
//   const handleCheckout = () => {
//     // const totalPrice = calculateTotal();
//     navigate('/checkout', { state: { cartItems } });
//   };
  

//   const fetchCartItems = async () => {
//     try {
//       const useremail = localStorage.getItem("email");
//       const response = await axios.post('http://localhost:3000/api/cart', { useremail }, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setCartItems(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     }
//   };

//   const removeItemFromCart = async (itemId) => {
//     try {
//       const response = await axios.post('http://localhost:3000/api/cart/remove', { itemId }, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setCartItems(cartItems.filter(item => item._id !== itemId));
//     } catch (error) {
//       console.error('Error removing item from cart:', error);
//     }
//   };

//   // const extractPriceNumber = (priceString) => {
//   //   return parseInt(priceString.replace(/[^0-9]/g, ''));
//   // };

//   // const calculateTotal = () => {
//   //   return cartItems.reduce((total, item) => total + extractPriceNumber(item.price), 0);
//   // };

  

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (cartItems.length === 0) {
//     return <p>Your cart is empty.</p>;
//   }

//   return (
//     <div className="cart">
//       <h2>Your Cart</h2>
//       <div className="cart-items">
//         {cartItems.map(item => (
//           <div className="cart-item" key={item._id}>
//             <img src={item.MainImage} alt={item.name} className="cart-item-image" />
//             <div className="cart-item-details">
//               <p>{item.name}</p>
//               <p>{item.price}</p>
//               <button onClick={() => removeItemFromCart(item._id)}>Remove</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="cart-total">
//         {/* <p>Total: ₹{calculateTotal().toLocaleString()}</p> */}
//         <button onClick={handleCheckout}>Proceed to Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

