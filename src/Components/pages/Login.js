import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { supabase } from "../../supabaseClient";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            // Sign in with Supabase
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            // Fetch user profile data
            const { data: profileData, error: profileError } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", data.user.id)
                .single();

            if (profileError) throw profileError;

            // Update user context
            setUser({
                isSignedUp: true,
                name: profileData.name,
                id: data.user.id,
            });

            // Navigate to preferences page
            navigate("/preferences");
        } catch (error) {
            setError(error.message);
            console.error("Error during login:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            {/* Left Side - Form */}
            <div className="login-form">
                <h2>🏡 Login to Flinder</h2>
                <p>Welcome Back! Please enter your details.</p>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleLogin}>
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
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
