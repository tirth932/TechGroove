import React from 'react';
// import './main.css';

const Disclaimer = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
        

        <div className='container' style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 align="center">Disclaimer For Shopping Policy</h1>
            <br/>
            <h2 align='center'>Disclaimer</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ textAlign: 'center' }}>
            Gadget Groove ("Company") does not endorse, warrant, or guarantee the authenticity, quality, delivery, safety, and benefits of the offers and/or Products and/or services advertised herein...
            </p>
            <br/>
            <h2 style={{ textAlign: 'center' }}>Caution Notice</h2>
            <p style={{ textAlign: 'center' }}>
            This is to notify the users that some unscrupulous persons have uploaded a mobile application...
            </p>
          </div>
        </div>


      {/* <h1 style={{ textAlign: 'center', marginTop: '50px' }}>CONTACT US</h1> */}
      <div id="contactus" style={{ display: 'flex', justifyContent: 'space-around', padding: '50px' }}>
        {/* <div>
          <p>CONNECT WITH US</p>
          <input type="text" placeholder="Enter Email" style={{ borderRadius: '5px', marginBottom: '10px' }} />
          <input type="submit" style={{ borderRadius: '5px' }} />
          <br /><br />
          <p>© Copyright 2024 TechGroove. All rights reserved</p>
        </div> */}
        {/* <div style={{ borderLeft: '1px solid white', paddingLeft: '20px' }}>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li><a href="privacy.html" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</a></li>
            <li><a href="faq.html" style={{ color: 'white', textDecoration: 'none' }}>FAQs</a></li>
            <li><a href="disclamer.html" style={{ color: 'white', textDecoration: 'none' }}>DISCLAIMER</a></li>
            <li><a href="ewaste.html" style={{ color: 'white', textDecoration: 'none' }}>E-Waste</a></li>
          </ul>
        </div> */}
        {/* <div style={{ borderLeft: '1px solid white', paddingLeft: '20px' }}>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            <li><a href="HomePage.html" style={{ color: 'white', textDecoration: 'none' }}>HOME</a></li>
            <li><a href="about.html" style={{ color: 'white', textDecoration: 'none' }}>ABOUT US</a></li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Disclaimer;
