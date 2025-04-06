import React from 'react';
import './choice.css';
import { avatars } from './SignUp'; // Import avatars from SignUp
import { useNavigate } from 'react-router-dom';
import { preferencesData } from './preferences'; // Import preferencesData

const matches = [
  {
    name: 'Chandan Kumar',
    location: 'Pune, Maharashtra, India',
    age: 28,
    occupation: 'Engineer',
    preferences: ['Non-smoker', 'Vegetarian', 'Pet-friendly'],
    matchPercentage: 60,
    image: 'https://via.placeholder.com/80'
  },
  {
    name: 'Anjali',
    location: 'Pune, Maharashtra, India',
    age: 25,
    occupation: 'Designer',
    preferences: ['Non-smoker', 'Gym', 'Early riser'],
    matchPercentage: 80,
    image: 'https://via.placeholder.com/80'
  },
  {
    name: 'Saniya Tajar',
    location: 'Pune, Maharashtra, India',
    age: 30,
    occupation: 'Teacher',
    preferences: ['Non-smoker', 'Vegetarian', 'Pet-friendly'],
    matchPercentage: 48,
    image: 'https://via.placeholder.com/80'
  },
  {
    name: 'Chaitanya',
    location: 'Shukrawar Peth, Pune, Maharashtra, India',
    age: 27,
    occupation: 'Developer',
    preferences: ['Non-smoker', 'Gym', 'Early riser'],
    matchPercentage: 60,
    image: 'https://via.placeholder.com/80'
  }
  // Add more profiles as needed
];

// Randomize avatar selection for each profile
const getRandomAvatar = () => avatars[Math.floor(Math.random() * avatars.length)];

// Randomly select preferences for each profile
const getRandomPreferences = () => {
  const shuffled = preferencesData.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3).map(pref => pref.name);
};

export const matchesWithRandomAvatars = matches.map(match => ({
  ...match,
  image: getRandomAvatar(),
  preferences: getRandomPreferences()
}));

const Choice = () => {
  const navigate = useNavigate();

  const handleProfileClick = (name) => {
    navigate(`/profile/${name}`);
  };

  return (
    <div className="choice-container">
      {matchesWithRandomAvatars.map((match, index) => (
        <div key={index} className="profile-card" onClick={() => handleProfileClick(match.name)}>
          <img src={match.image} alt="Profile" className="profile-image" />
          <div className="profile-details">
            <div className="profile-name">{match.name}</div>
            <div className="profile-info">{match.location}</div>
            <div className="profile-info">Age: {match.age}</div>
            <div className="profile-info">Occupation: {match.occupation}</div>
            <div className="match-percentage">{match.matchPercentage}% Match</div>
            <div className="preferences">Preferences: {match.preferences.join(', ')}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Choice; 