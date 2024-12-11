import React, { useEffect, useState } from 'react';
import '../css/ThankYouPage.css';

const ThankYouPage = ({ name }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after the component is mounted
    setIsVisible(true);
  }, []);

  return (
    <div className={`thank-you-container ${isVisible ? 'visible' : ''}`}>
      <h1>Thank you for buying {name} from us!</h1>
    </div>
  );
};

export default ThankYouPage;
