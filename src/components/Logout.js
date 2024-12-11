import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Remove the token from localStorage and cookies
    localStorage.removeItem('token');
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Clear the token cookie
    
    // Optionally, you can add a message to inform the user about successful logout
    alert("You have been logged out");

    // Redirect the user to the login page after logout
    navigate('/login');
  }, [navigate]);

  return null;
};

export default Logout;