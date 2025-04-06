import React from 'react';
import { useParams } from 'react-router-dom';
import { matchesWithRandomAvatars } from './choice';
import './Profile.css';

const Profile = () => {
  const { name } = useParams();
  const profile = matchesWithRandomAvatars.find(match => match.name === name);

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-card">
        <img src={profile.image} alt="Profile" className="profile-image" />
        <h2>{profile.name}</h2>
        <button className="chat-btn">Chat</button>
      </div>
      <div className="profile-details">
        <h3>Location</h3>
        <p>{profile.location}</p>
        <h3>Basic Info</h3>
        <p>Gender: {profile.gender || 'N/A'}</p>
        <p>Approx Rent: ₹{profile.rent || 'N/A'}</p>
        <p>Occupancy: {profile.occupancy || 'Single'}</p>
        <p>Looking For: {profile.lookingFor || 'N/A'}</p>
        <h3>Preferences</h3>
        <div className="preferences-list">
          {profile.preferences.map((pref, index) => (
            <span key={index} className="preference-item">
              <img src={`/images/${pref.toLowerCase()}.png`} alt={pref} />
              {pref}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile; 