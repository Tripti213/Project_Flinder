import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import "./preferences.css";

export const preferencesData = [
  { id: 1, name: "Gym", image: "/images/gym.png" },
  { id: 2, name: "Music", image: "/images/music.jpg" },
  { id: 3, name: "Travel", image: "/images/travel.png" },
  { id: 4, name: "Cooking", image: "/images/cooking.png" },
  { id: 5, name: "Reading", image: "/images/reading.png" },
  { id: 6, name: "Gaming", image: "/images/gaming.png" },
  { id: 7, name: "Sports", image: "/images/sports.png" },
  { id: 8, name: "Movies", image: "/images/movies.png" },
  { id: 9, name: "Photography", image: "/images/photography.png" },
  { id: 10, name: "Dancing", image: "/images/dancing.png" },
];

const Preferences = () => {
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const navigate = useNavigate();

  const togglePreference = (id) => {
    setSelectedPreferences((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

const handleContinue = async () => {
  if (selectedPreferences.length < 5) {
    alert("Please select at least 5 preferences.");
    return;
  }

  const { data: { user }, error: authError } = await supabase.auth.getUser();
  const userId = user?.id;

  if (authError || !userId) {
    alert("User not logged in.");
    return;
  }

  // Map selected preferences to Supabase UUIDs
  const preferenceInsertData = preferencesData
    .filter((pref) => selectedPreferences.includes(pref.id))
    .map((pref) => ({
      user_id: userId,
      preference_id: pref.id, // assuming you're using numeric IDs in DB (update if using UUIDs)
    }));

  const { error } = await supabase.from("user_preferences").insert(preferenceInsertData);

  if (error) {
    console.error("Error inserting preferences:", error.message);
    alert("Failed to save preferences. Try again.");
    return;
  }

  navigate("/choice");
};

  return (
    <div className="preferences-container">
      <h2>Select Your Interests</h2>
      <p>Choose at least 5 preferences</p>

      <div className="preferences-grid">
        {preferencesData.map((pref) => (
          <div
            key={pref.id}
            className={`preference-item ${selectedPreferences.includes(pref.id) ? "selected" : ""}`}
            onClick={() => togglePreference(pref.id)}
          >
            <img src={pref.image} alt={pref.name} />
            <span>{pref.name}</span>
          </div>
        ))}
      </div>

      <button className="continue-btn" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default Preferences;

