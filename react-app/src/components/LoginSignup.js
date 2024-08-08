import React, { useState } from 'react';
import './loginsignup.css'; // Import CSS file

const LoginSignup = () => {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleLogin = async () => {
        console.log("Login function executed", formData);
        let responseData;
        try {
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            responseData = data;
            if (responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace("/");
            }
            else{
              alert(responseData.errors)
            }
        } catch (error) {
            console.error('Signup error:', error);
        }
        // Implement login logic here using formData.email and formData.password
    }

    const handleSignup = async () => {
        console.log("Signup function executed", formData);
        let responseData;
        try {
            const response = await fetch('http://localhost:4000/signup', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            responseData = data;
            if (responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace("/");
            }
            else{
              alert(responseData.errors)
            }
        } catch (error) {
            console.error('Signup error:', error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (state === "Login") {
            handleLogin();
        } else if (state === "Sign Up") {
            handleSignup();
        }
    }

    const toggleState = () => {
        setState(state === "Login" ? "Sign Up" : "Login");
    }

    return (
        <div className='loginsignup'>
            <div className='loginsignup-container'>
                <h1>{state}</h1>
                <form onSubmit={handleSubmit}>
                    <div className='loginsignup-field'>
                        {state === "Sign Up" && (
                            <input 
                                name='username' 
                                value={formData.username} 
                                onChange={handleChange} 
                                type="text" 
                                placeholder='Your Name' 
                            />
                        )}
                        <input 
                            name='email' 
                            value={formData.email} 
                            onChange={handleChange} 
                            type="email" 
                            placeholder='Email Address' 
                        />
                        <input 
                            name='password' 
                            value={formData.password} 
                            onChange={handleChange} 
                            type="password" 
                            placeholder='Password' 
                        />
                    </div>
                    <button type="submit">Continue</button>
                </form>
                {state === "Sign Up" ? (
                    <p className='loginsignup-login'>
                        Already have an account?
                        <span onClick={toggleState}> Login Here</span>
                    </p>
                ) : (
                    <p className='loginsignup-login'>
                        Create an account?
                        <span onClick={toggleState}> Click Here</span>
                    </p>
                )}
                <div className='loginsignup-agree'>
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, I agree to the terms of use and privacy.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
