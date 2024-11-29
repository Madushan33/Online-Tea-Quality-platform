import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <p>&copy; 2024 Tea Estates. All rights reserved.</p>
      <p>
        <a href="/privacy-policy">Privacy Policy</a> | 
        <a href="/terms-of-service"> Terms of Service</a>
      </p>
    </div>
  )
}

export default Footer