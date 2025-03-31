import React, { useState } from "react";
import "./Swipe.css";
import { useNavigate } from "react-router-dom";

const profiles = [
  {
    name: "Pamela Volcov",
    location: "California, United States",
    preferences: ["No Pets", "Vegetarian", "Female Preferred", "Age Range: 22 - 40"],
    image: "/images/pamela.jpg",
    background: "/images/office.jpg",
  },
  {
    name: "Alex Brown",
    location: "Chicago, Illinois",
    preferences: ["No Pets", "Vegetarian", "Male Preferred", "Age Range: 22 - 40"],
    image: "/images/alex.jpg",
    background: "/images/nature.jpg",
  },
  {
    name: "Sophia Lee",
    location: "New York, USA",
    preferences: ["No Smoking", "Dog Friendly", "Female Preferred", "Age Range: 25 - 35"],
    image: "/images/sophia.jpg",
    background: "/images/city.jpg",
  },
];

function Swipe() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % profiles.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + profiles.length) % profiles.length);
  };

  return (
    <div className="swipe-container" style={{ backgroundImage: `url(${profiles[index].background})` }}>
      <div className="profile-card">
        <img src={profiles[index].image} alt={profiles[index].name} className="profile-img" />
        <h3>{profiles[index].name}</h3>
        <p>Place: {profiles[index].location}</p>
        <h4>Preferences:</h4>
        <ul>
          {profiles[index].preferences.map((pref, i) => (
            <li key={i}>{pref}</li>
          ))}
        </ul>
        <div className="navigation">
          <button onClick={handlePrev}>⬅</button>
          <button onClick={handleNext}>➡</button>
        </div>
      </div>
    </div>
  );
}

export default Swipe;
