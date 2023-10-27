import React from 'react';
import './NewspaperHeader.css';
import logo from "../../../Assests/dark_logo_transparent_background.png";

const NewspaperHeader = () => {
  // Get the current date
  const currentDate = new Date();
  
  // Format the date as "Day, Month Date, Year"
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="header">
      <div className="left-section">
        <p className="date">{formattedDate}</p>
        <a href="#" className="todays-paper-link">Today’s Paper</a>
      </div>
      <div className="center-section">
        <a href="/" className="title">
          <img
              src={logo}
              alt=""
              className=""
              
          />
        </a>
        {/* <h1 className="title">The New York Times</h1> */}
      </div>
    </div>
  );
};

export default NewspaperHeader;
