import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import login_Logo from "../assets/Logos/logoLogin.jpg"
import "../css/login.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login', { email, password });
            if (response.data.token) {
                document.cookie = `token=${response.data.token}`;
                const { token, user } = response.data;
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', response.data.email);
                localStorage.setItem('userDetails', JSON.stringify(user));
                 // Store user details
                // setIsAuthenticated(true);
                // setUser(user);
                navigate("/");
            }
        } catch (error) {
            alert("Login Failed");
        }
    };
   

    return (
        <div className='loginBody'>
        <div className="LoginMain">
            <div className="leftLogin">
                <img src={login_Logo} alt="Login Image" />
            </div>
            <div className="rightLogin">
                <div className="login-box">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="user-box">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <label>Email</label>
                        </div>
                        <div className="user-box">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <label>Password</label>
                        </div>
                        <button type="submit" className='loginButton'>
                            Login
                        </button>
                    </form>
                    <p className='p-tag'>
                        Don't have an account?{" "}
                        <span onClick={() => navigate("/signup")} className="signup-link">
                            Sign up here
                        </span>
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login;
