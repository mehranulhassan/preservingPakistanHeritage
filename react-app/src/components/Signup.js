import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './signup.css'; // Import CSS file
import logo from '../images/logo2.JPG'; // Import your logo image file

function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:4000/signup", {
                username,
                email,
                password
            });

            if (response.data.message === "exist") {
                alert("User already exists");
            } else if (response.data.success) {
                navigate("/home", { state: { id: email } });
            } else {
                alert("Signup failed");
            }
        } catch (error) {
            alert("Error signing up");
            console.error(error);
        }
    }

    return (
        <div className="signup-container">
            <div className="box-form">
                <div className="left">
                    <img src={logo} alt="Logo" />
                    <div className="overlay">
                        <span><b>Preserving Pakistan Heritage</b></span>
                    </div>
                </div>
                <div className="right">
                    <form onSubmit={submit}>
                        <h5>Signup</h5>
                        <div className="inputs">
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                        </div>
                        <div className="remember-me--forget-password">
                            <label>
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <Link to="/login">Already have an account? Login here</Link>
                        </div>
                        <button type="submit">Signup</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
