// @ts-ignore
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '/src/components/styles/main.css';

function HomeMain() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === 'user' && password === 'user') {
            navigate('/dashboard');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="main-area">
            <div className="main-logo">
                <img src="../public/assets/logo/logo.png" alt="logo" />
            </div>

            <div className="login-form-frame">
                {isLogin ? (
                    <form className="login-form" onSubmit={handleLogin}>
                        <h2 className="main-title">Login</h2>
                        <div className="login-flex">
                            <label className="login-label" htmlFor="email">Email:</label>
                            <input
                                className="login-input"
                                type="text"
                                id="email"
                                name="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="login-flex">
                            <label className="login-label" htmlFor="password">Password:</label>
                            <input
                                className="login-input"
                                type="password"
                                id="password"
                                name="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="login-btn" type="submit">Login</button>
                        <p className="go-signup">
                            Don't have an account? <span className="toggle-link" onClick={toggleForm}>Go to Sign Up</span>
                        </p>
                    </form>
                ) : (
                    <form>
                        <h2 className="main-title">Sign Up</h2>
                        <div className="login-flex">
                            <label className="login-label" htmlFor="email">Email:</label>
                            <input className="login-input" type="email" id="email" name="email" required />
                        </div>
                        <div className="login-flex">
                            <label className="login-label" htmlFor="password">Password:</label>
                            <input className="login-input" type="password" id="password" name="password" required />
                        </div>
                        <div className="login-flex">
                            <label className="login-label" htmlFor="confirmPassword">Confirm Password:</label>
                            <input className="login-input" type="password" id="confirmPassword" name="confirmPassword" required />
                        </div>
                        <button className="login-btn" type="submit">Sign Up</button>
                        <p className="go-signup">
                            Already have an account? <span className="toggle-link" onClick={toggleForm}>Go to Login</span>
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
}

export default HomeMain;
