import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/signUp.css";
import login_Logo from "../assets/Logos/logoLogin.jpg"


function Signup() {
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!termsAccepted) {
            alert("You must accept the terms and conditions to continue.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/signup', {
                username,
                password,
                email,
                contact,
            });
            if(response.data){
                navigate("/login");
            }
            else{
                console.log('User registered:none');
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
      <div className="signUpBody">
        <div className="signUpMain">
            <div className="rightsignUp">
                <div className="signUp-box">
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSignUp}>
                        <div className="user-box">
                            <input
                                type="text"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <label>Username</label>
                        </div>
                        <div className="user-box">
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label>Password</label>
                        </div>
                        <div className="user-box">
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label>Email</label>
                        </div>
                        <div className="user-box">
                            <input
                                type="number"
                                name="contact"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                required
                            />
                            <label>Contact</label>
                        </div>
                        <div className="terms-box">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={termsAccepted}
                                    onChange={() => setTermsAccepted(!termsAccepted)}
                                />
                                I accept the terms and conditions
                            </label>
                        </div>
                        <button type="submit" className="loginButton">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
            <div className="leftsignUp">
                <img src={login_Logo} alt="Login Image" />
            </div>
        </div>
        </div>
    );
}

export default Signup;
