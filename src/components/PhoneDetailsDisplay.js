import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../css/DetailsDisplay.css"
import { useNavigate } from 'react-router-dom';

const PhoneDetailsDisplay = () => {
  const [items, setItems] = useState([]);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const { phoneName } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // Fetch data from API
  useEffect(() => {
    axios.get(`http://localhost:3000/api/phoneName/${phoneName}`)
      .then(response => {
        setItems(response.data);
        // Create dynamic images array from the API response
        if (response.data[0] && response.data[0].DiscriptionUpper) {
          const dynamicImages = response.data[0].DiscriptionUpper.map((imgUrl, index) => ({
            src: imgUrl, // Assuming imgUrl contains the URL
            description: `Description ${index + 1}`, // You can customize this description
          }));
          setImages(dynamicImages);
        }
      })
      .catch(error => console.error(error));
  }, [phoneName]);

  // Carousel effect with fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        setFade(false);
      }, 100); // Match this timing with the CSS transition
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex, images.length]);

  // Handle previous slide
  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setFade(false);
    }, 100);
  };

  // Handle next slide
  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setFade(false);
    }, 100);
  };
  
  const handleAddToCart = (itemId) => {
    if (!token) {
      alert("Please log in to add items to the cart");
      return;
    }
    const useremail=localStorage.getItem("email")
    axios.post('http://localhost:3000/api/cart/add', { itemId,useremail }, {
      headers: {
        Authorization: `Bearer ${token}` // Assuming you are using JWT for authentication
      }
    })
    .then(response => {
      alert('Item added to cart');
    })
    .catch(error => {
      console.error("Error adding item to cart:", error);
    });
  };
  const handleCheckout1=()=> {
    // const totalPrice = calculateTotalPrice();
    navigate('/checkout1', { state: { items} });
  }

  return (
    <div className='items-display'>
      <div className='upper-details'>

        <div className='img-right'>
          {items.length > 0 && images.length > 0 ? (
            <div className="carousel1">
              <div className={`carousel-inner1 ${fade ? 'fade1' : ''}`}>
                <img src={images[currentIndex].src} alt={`Slide1 ${currentIndex}`} className="carousel-image1" />
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className='details-right'>
          {items.map(item => (
            <div>
              <p className="fonts">{item.name}
              </p>
              <p style={{ "fontSize": 20, color: "rgb(57, 102, 991)" }}> <strong>{item.rating}</strong> Ratings</p>
              <p style={{ "fontSize": 20, color: "rgb(4, 139, 88)" }}><strong>{item.stars}</strong> Stars</p>
              <p style={{ "fontSize": 20, color: "rgb(4, 139, 88)" }}>200+
                bought in past month</p>
              <hr style={{ backgroundColor: "black" }} />
              <p style={{ "fontSize": 40, color: "black" }}>{item.price}
                <sub style={{ color: "gray" }}>M.R.P:</sub><sub
                  style={{ color: " gray", "textDecoration": "line-through" }}>{item.previousPrice}</sub>
                <p style={{ color: "red", "fontSize": 30 }}>(5% off)</p></p>

              <p style={{ color: "black", "fontSize": 20 }}>Inclusive of all
                taxes<br />
                EMI starts at ₹6,206. No Cost EMI available </p>
              <hr style={{ backgroundColor: "black" }}></hr>
              <h2 style={{ color: "black" }}>Color : {item.colour}

              </h2>
              <img
                src={item.MainImage}
                style={{ width: 100, height: 100 }} />
              <p style={{ "fontSize": 20, color: "black" }}>
                <strong>Size:</strong> {item.size}
                <br />
                <strong>Brand:</strong> {item.brand}
                <br />
                <strong>Model Name:</strong> {item.modelName}
                <br />
                <strong>Network Service Provider:</strong> Unlocked for All Carriers
                <br />
                <strong>Operating System:</strong> {item.operatingSystem}
                <br />
                <strong>Cellular Technology:</strong>  5G
                <br></br>
                <br></br>
                <button className='buyNow' onClick={handleCheckout1}>Buy Now</button>         <button className='addToCart' onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </p>
            </div>
          ))}
        </div>
      </div>
      {items.map(item => (

        <div className="phone-details">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6">
            <table className="custom-table">
              <tbody>
                <tr>
                  <td className="label-cell"><strong>Display</strong></td>
                  <td className="value-cell">
                    {item.display}
                  </td>
                </tr>
                <tr>
                  <td className="label-cell"><strong>Capacity</strong></td>
                  <td className="value-cell">{item.capacity}</td>
                </tr>
                <tr>
                  <td className="label-cell"><strong>Splash, Water, and Dust Resistant</strong></td>
                  <td className="value-cell">{item.splashwaterandDustResistant}</td>
                </tr>
                <tr>
                  <td className="label-cell"><strong>Camera and Video</strong></td>
                  <td className="value-cell">
                    {item.cameraAndVideo}
                  </td>
                </tr>
                <tr>
                  <td className="label-cell"><strong>Front Camera</strong></td>
                  <td className="value-cell">{item.frontCamera}</td>
                </tr>
                <tr>
                  <td className="label-cell"><strong>Power and Battery</strong></td>
                  <td className="value-cell">
                    {item.powerandbattery}
                  </td>
                </tr>
                <tr>
                  <td className="label-cell"><strong>In the Box</strong></td>
                  <td className="value-cell">{item.inthebox}</td>
                </tr>
                <tr>
                  <td className="label-cell"><strong>Warranty</strong></td>
                  <td className="value-cell">
                    {item.warranty}
                  </td>
                </tr>
                <tr>
                  <td className="label-cell"><strong>Height</strong></td>
                  <td className="value-cell">{item.height}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <table className="custom-table">
              <tbody>
                <tr>
                  <td className="label-cell"><strong>Width</strong></td>
                  <td className="value-cell">{item.width}</td>
                </tr>
                <tr>
                  <td className="label-cell"><strong>Depth</strong></td>
                  <td className="value-cell">{item.depth}</td>
                </tr>
                <tr>
                  <td className="label-cell"><strong>Weight</strong></td>
                  <td className="value-cell">{item.weight}</td>
                </tr>
                <tr>
                  <td className="label-cell"><strong>Screen Size</strong></td>
                  <td className="value-cell">{item.screenSize}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      ))}

      <div className='middle-details'>
        {items.map(item => (

          item.DiscriptionLower.map(imgs => (
            <div className='discriptionLower'>
              <img src={imgs}></img>
            </div>
          ))
        ))}
      </div>
    </div>
  );
};

export default PhoneDetailsDisplay;
