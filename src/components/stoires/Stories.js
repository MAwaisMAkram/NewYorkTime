import { useState } from "react";
import React from "react";
import "./stories.css"
import myImage from "../../Assests/Heritage.webp";


function Stories() {
    const currentDate = new Date();
  
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      };
  // Format the date as "Day, Month Date, Year"
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  return (
    <stories>
        <div className="heading">
            <h1>Top Stories</h1>
        </div>
        {/* <div className="image-layout">
            <div className="left-side">
                <a href="#" className="full-height-link">
                    <img
                        src="../../Assests/Nadine Ijewere.png" 
                        alt="Left side"
                        className="full-height-image"
                    />
                </a>
            </div>
        </div> */}

        <div className="flex-container">
            <div className="left-container">
                <a href="/" className="full-height-link">
                    <img
                        src={myImage}
                        alt="Left side"
                        className="full-height-image"
                    />
                    <div className="left-content">
                        <p>PHOTOGRAPHY</p>
                        <h2>“It’s My Time”: Nadine Ijewere’s First Solo UK Show Is Stunning – And Long Overdue</h2>
                        <p>By Radhika Seth</p>
                        <span>{formattedDate}</span>
                    </div>
                </a>
            </div>
            <div className="right-container">
                <div className="image-row">
                    <div  className="image-column">
                        <a href="/" className="image-link">
                            <img
                                src={myImage}
                                alt=""
                                className="height-image"
                            />
                        </a>
                        <a href="/" className="image-link">
                            <img
                                src={myImage}
                                alt=""
                                className="height-image"
                            />
                        </a>

                        {/* <div className="image-content">
                            <h3>Image</h3>
                            <p>Additional content for image.</p>
                        </div> */}
                    </div>
                </div>
                <div className="image-row">
                    <div  className="image-column">
                        <a href="/" className="image-link">
                            <img
                                src={myImage}
                                alt=""
                                className="height-image"
                            />
                        </a>
                        <a href="/" className="image-link">
                            <img
                                src={myImage}
                                alt=""
                                className="height-image"
                            />
                        </a>

                        {/* <div className="image-content">
                            <h3>Image</h3>
                            <p>Additional content for image.</p>
                        </div> */}
                    </div>
                </div>

            </div>
        </div>
    </stories>
  );
}

export default Stories;
