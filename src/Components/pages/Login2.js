import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login2.css";

function Login2() {
  const navigate = useNavigate();

  return (
    <div className="login2-container">
      {/* Left Side - Image */}
      <div className="login2-image-container">
        <img src="/images/login2pg.jpg" alt="Flatmates" />

      </div>

      {/* Right Side - Form */}
      <div className="login2-content">
        <div className="login2-form">
          <div className="form-group">
            <label>Age*</label>
            <input type="text" placeholder="Enter Your Age" required />
          </div>
          <div className="form-group">
            <label>Gender*</label>
            <input type="text" placeholder="Enter Your Gender" required />
          </div>
          <div className="form-group">
            <label>City*</label>
            <input type="text" placeholder="Enter Your City" required />
          </div>
          <div className="form-group">
            <label>State*</label>
            <input type="text" placeholder="Enter Your State" required />
          </div>

          {/* Navigation Buttons */}
          <div className="login2-buttons">
            <button onClick={() => navigate(-1)}>{"< Prev"}</button>
            <button onClick={() => navigate("/nextpage")}>{"Next >"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login2;
