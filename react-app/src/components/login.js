import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './login.css'; // Import CSS file
import logo from '../images/logo2.JPG'; // Import your logo image file

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:4000/login", {
                email,
                password
            }).then(res => {
                if (res.data === "exist") {
                    history("/home", { state: { id: email } })
                } else if (res.data === "notexist") {
                    alert("User has not signed up")
                }
            }).catch(e => {
                alert("Wrong details")
                console.log(e);
            })
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <div className="box-form">
                <div className="left">
                    <img src={logo} alt="Logo" />
                    <div className="overlay">
                        <span>
                            <h><b><center>Preserving Pakistan Heritage</center></b></h>
                            <br />
                            <br />
                            <br />
                        </span>
                    </div>
                </div>
                <div className="right">
                    <form onSubmit={submit}>
                        <h5>Login</h5>
                        <div className="inputs">
                            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </div>
                        <div className="remember-me--forget-password">
                            <label>
                                <span className="text-checkbox">Remember me</span>
                                <input type="checkbox" />
                            </label>
                           
                            <Link to="/signup">Signup Page</Link>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
