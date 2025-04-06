import React, { useState, useContext } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export const avatars = [
  "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraightStrand&accessoriesType=Sunglasses&hairColor=Brown&facialHairType=Blank&clotheType=CollarSweater&clotheColor=PastelYellow&eyeType=Surprised&eyebrowType=FlatNatural&mouthType=Smile&skinColor=Pale",
  "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Wayfarers&hairColor=Brown&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=BlazerShirt&clotheColor=Gray01&eyeType=Default&eyebrowType=RaisedExcitedNatural&mouthType=Eating&skinColor=Pale",
  "https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Prescription02&hatColor=Red&hairColor=Blonde&facialHairType=MoustacheMagnum&facialHairColor=Brown&clotheType=ShirtScoopNeck&clotheColor=Gray02&eyeType=Surprised&eyebrowType=SadConcerned&mouthType=Tongue&skinColor=DarkBrown",
  "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Prescription02&hairColor=Platinum&facialHairType=Blank&clotheType=Hoodie&clotheColor=Pink&eyeType=Default&eyebrowType=UpDownNatural&mouthType=Default&skinColor=Light",
];

const SignUp = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [occupation, setOccupation] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (!name || !age || !selectedGender || !city || !selectedAvatar || !occupation) {
      alert("Please fill in all fields.");
      return;
    }
    setUser({ isSignedUp: true, name });
    navigate("/preferences");
  };

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", 
    "Kolkata", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", 
    "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara",
    "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot",
    "Kalyan-Dombivli", "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad",
    "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", "Howrah", "Gwalior",
    "Jabalpur", "Coimbatore", "Vijayawada", "Jodhpur", "Madurai", "Raipur",
    "Kota", "Guwahati", "Chandigarh", "Solapur", "Hubli–Dharwad", "Bareilly",
    "Moradabad", "Mysore", "Gurgaon", "Aligarh", "Jalandhar", "Tiruchirappalli",
    "Bhubaneswar", "Salem", "Mira-Bhayandar", "Thiruvananthapuram", "Bhiwandi",
    "Saharanpur", "Gorakhpur", "Guntur", "Bikaner", "Amravati", "Noida",
    "Jamshedpur", "Bhilai", "Cuttack", "Firozabad", "Kochi", "Bhavnagar",
    "Dehradun", "Durgapur", "Asansol", "Nanded", "Kolhapur", "Ajmer",
    "Gulbarga", "Jamnagar", "Ujjain", "Loni", "Siliguri", "Jhansi",
    "Ulhasnagar", "Nellore", "Jammu", "Belgaum", "Mangalore", "Udaipur",
    "Tirunelveli", "Malegaon", "Gaya", "Tiruppur", "Davanagere", "Kozhikode",
    "Akola", "Kurnool", "Bokaro", "Rajahmundry", "Ballari", "Agartala",
    "Bhagalpur", "Latur", "Dhule", "Korba", "Bhilwara", "Brahmapur",
  ];

  return (
    <div className="signup-container">
      <div className="form-container"> {/* White box container */}
        <h2>Sign Up</h2>

        <form className="signup-form">
          <div className="form-group">
            <label>Your Name*</label>
            <input type="text" placeholder="Please enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            <small>(Note: Users with real names get 90% more engagement.)</small>
          </div>

          <div className="form-group">
            <label>Your Age*</label>
            <input type="number" placeholder="Please enter your age" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Your Gender*</label>
            <div className="gender-buttons">
              <button 
                type="button" 
                className={selectedGender === "Male" ? "selected" : ""}
                onClick={() => setSelectedGender("Male")}
              >
                Male
              </button>
              <button 
                type="button" 
                className={selectedGender === "Female" ? "selected" : ""}
                onClick={() => setSelectedGender("Female")}
              >
                Female
              </button>
            </div>
          </div>

          <div className="form-group">
            <label>Please select the city where you're searching*</label>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
              <option value="">Select City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Your Occupation*</label>
            <input type="text" placeholder="Please enter your occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Upload Image / Select Avatar</label>
            <div className="upload-box">
              <input type="file" id="file-upload" />
              <label htmlFor="file-upload">
                <img src="/upload-icon.png" alt="Upload" />
                Click or Drop to upload profile image (jpg or png)
              </label>
            </div>
          </div>

          <div className="form-group avatar-section">
            <span>-- OR --</span>
            <div className="avatars">
              {avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt="Avatar"
                  className={selectedAvatar === avatar ? "selected" : ""}
                  onClick={() => setSelectedAvatar(avatar)}
                />
              ))}
            </div>
          </div>

          <button className="register-btn" onClick={handleRegister}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
