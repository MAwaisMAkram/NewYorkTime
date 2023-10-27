import React, {useState, useEffect, useRef} from "react";
import "./jobslider.css";

function JobSlider () {
    const [startIndex, setStartIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [offset, setOffset] = useState(0);
    const sliderContentRef = useRef(null);

    const handleMouseDown = (event) => {
        setDragging(true);
        setStartIndex(event.clientX);
    };

    const handleMouseMove = (event) => {
        if (dragging) {
            const currentOffset = event.clientX - startIndex;
            setOffset(currentOffset);
        }
    };

    const handleMouseUp = () => {
        if (dragging) {
            const cardWidth = sliderContentRef.current.offsetWidth / 3; 
            const movedCards = Math.round(offset / cardWidth);
            setStartIndex(0);
            setDragging(false);
            setOffset(0);

            
            const totalCards = 3;
            const newIndex = Math.max(0, Math.min(startIndex - movedCards, totalCards - 1));
            setCurrentIndex(newIndex);
        }
    };
    return (
        <jobslider>
            <div className="heading2">
                <h1>ENDING SOON</h1>
            </div>
            <div
                className="horizontal-slider"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
            >
                <div
                    className="slider-content"
                    style={{ transform: `translateX(-${currentIndex * 100 + offset}px)` }}
                    ref={sliderContentRef}
                >
                    
                    <div className="card">
                        <div className="content">
                            <p>Date</p>
                            <p>Country Name</p>
                            <h2>Heading</h2>
                            <p>Paragraph</p>
                            <a href="#">
                                <span className="dot">&#8226;</span>
                                    Link
                                <span className="dot">&#8226;</span>
                            </a>
                        </div>
                    </div>
                    {/* add  more cards  */}
                    {/* <div className="card">Card 2</div> */}
                    
                </div>
            </div>
        </jobslider>
    );
}

export default JobSlider;