import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../assets/images/OIP.jpeg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [user, setUser] = useState(null); // Store user details
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    setSearchQuery(""); 
    try {
      const response = await axios.get(`http://localhost:3000/api/search`, {
        params: { query: searchQuery },
      });
      if (response.data.length > 0) {
        setSearchResults(response.data);
        setNoResults(false);
      } else {
        setSearchResults([]);
        setNoResults(true);
      }
    } catch (error) {
      console.error('Error during search:', error.message);
      setSearchResults([]);
      setNoResults(true);
    }
  };

  const handleBuyNowClick = (item) => {
    setSearchResults([]);
    const encodedName = encodeURIComponent(item.name);  
    if (item.category === "phone") {
      navigate(`/phoneName/${encodedName}`);
    } else if (item.category === "AC") {
      navigate(`/acName/${encodedName}`);
    } else if (item.category === "laptop") {
      navigate(`/laptopName/${encodedName}`);
    } else if (item.category === "AirBuds") {
      navigate(`/airbudsName/${encodedName}`);
    } else if (item.category === "TV") {
      navigate(`/tvName/${encodedName}`);
    } else if (item.category === "Refridgerator") {
      navigate(`/refridgeratorName/${encodedName}`);
    } else {
      navigate(`/phoneName/${encodedName}`);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      // Fetch user details from backend or use stored info in localStorage
      const userDetails = localStorage.getItem('userDetails');
      setUser(userDetails ? JSON.parse(userDetails) : null);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  
  

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:3000/logout'); 
      localStorage.removeItem('token');
      localStorage.removeItem('userDetails'); // Clear user details
      setIsAuthenticated(false);
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="navbar">
      <div className='navbarInner1'>
        <a href='/'><img src={logo} alt="logo" style={{ width: '80px', height: '80px' }} /></a>

        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
          <li>
            <form className="search-form" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit" className="search-button">
                <SearchIcon style={{ fontSize: '28', color: 'white' }} />
              </button>
            </form>
          </li>
        </ul>

        <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </button>
        <div className='auth-links'>
          {isAuthenticated ? (
            <>
              <Link to="/user-details" style={{color:"white"}}>User Details</Link> {/* User Details button */}
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login"><AccountCircleIcon style={{ fontSize: 40, color: 'white' }} /></Link>
          )}
          <Link to="/cart"><ShoppingCartIcon style={{ fontSize: 40, color: 'white' }} /></Link>
        </div>
      </div>

      <div className='search-results'>
        {noResults ? (
          <p>No item found</p>
        ) : (
          searchResults.map((item) => (
            <div key={item._id} className="search-item">
              <div className="item-info">
                <div className='item-img'>
                  <img 
                    src={item.MainImage} 
                    alt={item.name}
                    style={{ height: '250px', width: '250px' }}
                  />
                </div>
                <div className='item-details'>
                  <h3>{item.name}</h3>
                  <p style={{ fontSize: "20px", color: "black" }}>{item.price}</p>  
                  <button style={{color:"white !important",backgroundColor:"white"}} onClick={() => handleBuyNowClick(item)}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className='navbarInner2'>
      <Link to="/order-details">Orders</Link>
        <Link to={"/phone/phone"}>Phone</Link>
        <Link to={"/laptop/laptop"}>Laptop</Link>        
        <Link to={"/AirBuds/AirBuds"}>AirPods</Link>
        <Link to={"/TV/TV"}>Television</Link>
        <Link to={"/AC/AC"}>Air Conditioner</Link>
        <Link to={"/Refridgerator/Refridgerator"}>Refrigerator</Link>
      </div>
    </nav>
  );
};

export default Navbar;
