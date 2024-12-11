import React, { useState } from 'react';
import '../css/FAQ.css'

const Faq = () => {
  const faqs = [
    { question: "1. Can I change my email-id or mobile number?", answer: "Unfortunately, your Email ID or mobile number once registered cannot be changed. However, you can create a new account with your new contact number or Email ID." },
    { question: "2. What payment methods do you accept?", answer: "We accept Visa, MasterCard, American Express, and PayPal." },
    { question: "3. Can I return a product?", answer: "Yes, you can return a product within 30 days of purchase. Please refer to our Return Policy for more details." },
    { question: "4. Do you offer gift wrapping?", answer: "Yes, we offer gift wrapping for an additional fee. You can select this option during checkout." },
    { question: "5. How can I contact customer service?", answer: "You can contact our customer service team by phone at 1-800-123-4567 or by email at support@example.com." },
    { question: "6. Do you ship internationally?", answer: "Yes, we ship internationally. Shipping costs and delivery times may vary depending on the destination." },
    { question: "7. Can I cancel my order?", answer: "You can cancel your order within 24 hours of placing it. After that, please contact customer service for assistance." },
    { question: "8. Is my personal information secure?", answer: "Yes, we take the security of your personal information seriously. We use encryption technology to protect your data." },
    { question: "9. Do you offer discounts for bulk purchases?", answer: "Yes, we offer discounts for bulk purchases. Please contact our sales team for more information." },
    { question: "10. How do I change my account password?", answer: "You can change your account password by logging into your account and visiting the Account Settings page." }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='Faq'>

      <div className="faq-container">
        <h1>FAQs</h1>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`}></i>
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
