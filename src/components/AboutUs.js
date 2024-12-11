import React from 'react';
import "../css/AboutUs.css"
function AboutUs() {
  return (
    <div className="aboutUs" >


      <div className='aboutInner'>
        <h2 align="center"><b>About Us</b></h2>
        <p>Welcome to TechGroove! We are dedicated to providing electronic products to our customers.</p>
        <br />
        <div>
          <h3>Our Story</h3>
          <p>TechGroove was founded in 2024. Since then, we've been on a mission to perfect our recipes while staying true to our roots.</p>
        </div>
        <br />
        <div>
          <h3>Our Mission</h3>
          <p>At TechGroove, our mission is to empower businesses with cutting-edge technology. We believe in innovation, integrity, and customer satisfaction.</p>
        </div>
        <br />
        <div>
          <h3>Our Team</h3>
          <p>Meet the passionate individuals who make TechGroove possible.<br />
            Our team consists of experienced engineers, designers, and marketers dedicated to delivering
            exceptional results.</p>
        </div>
        <br />
        <div>
          <h3>Our Products/Services</h3>
          <p>Discover TechGroove's products/services. From state-of-the-art software solutions, we strive to delight our customers.</p>
        </div>
        <br />
        <div>
          <h3>Customer Satisfaction</h3>
          <p>At TechGroove, our customers are our priority. We are committed to providing exceptional support and service.</p>
        </div>
        <br />
        <h3>Contact Us</h3>
        <p>We'd love to hear from you! If you have any questions or inquiries, please don't hesitate to reach out to our customer support team or visit our contact page.</p>
        <p>Thank you for choosing TechGroove. We look forward to serving you!</p>
      </div>

      <br />

    </div>

  );
}

function toggleMenu() {
  const menu = document.getElementById('link');
  menu.classList.toggle('show');
}

function toggleDropdown(e) {
  e.preventDefault();
  const dropdown = e.currentTarget.nextElementSibling;
  dropdown.classList.toggle('show');
}

export default AboutUs;
