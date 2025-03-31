import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const navigate = useNavigate();

    return (
        <div className="login-container">
            {/* Left Side - Form */}
            <div className="login-form">
                <h2>🏡 Login to Flinder</h2>
                <p>Welcome Back! Please enter your details.</p>

                <form>
                    <label>Email or Phone</label>
                    <input type="text" placeholder="Enter Email or Mobile No." required />

                    <label>Password</label>
                    <input type="password" placeholder="Enter Your Password" required />

                    
                    <button onClick={() => navigate("/login2")}>Next </button>

                </form>

                <p className="switch">
                    Don't have an account?{" "}
                    <span onClick={() => navigate("/signup")}>Sign Up</span>
                </p>
            </div>

            {/* Right Side - Image */}
            <div className="login-image">
                <img src="/images/loginpg.webp" alt="Flatmates" />

            </div>
        </div>
    );
}

export default Login;
