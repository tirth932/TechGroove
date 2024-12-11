import React, { useEffect, useState } from 'react';

const UserDetails = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userDetails = localStorage.getItem('userDetails');
    setUser(userDetails ? JSON.parse(userDetails) : null);
  }, []);

  if (!user) {
    return <p>No user details found. Please log in.</p>;
  }

  return (
    <div>
      <h1>User Details</h1>
      <p><strong>Name:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Contact:</strong> {user.contact}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default UserDetails;
