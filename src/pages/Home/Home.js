import React from 'react';
import './Home.css';  // You will define styling in this file
import teaEstate from '../../assets/tea-estate.jpg'; // Place your tea estate image in the assets folder

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Best Tea Quality Platforms</h1>
      <p>Manage your tea production, chemicals, fertilizers, and baby tea plants efficiently.</p>

      {/* Image Section */}
      <div className="image-container">
        <img src={teaEstate} alt="Tea Estate" className="tea-image" />
      </div>
    </div>
  );
}

export default Home;
