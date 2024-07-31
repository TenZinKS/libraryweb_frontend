// @ts-ignore
import React, { useState } from 'react';
import '/src/components/styles/main.css';

function HomeMain() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <>
            <div className="main-area">
                <div className="login-form">
                    {isLogin ? (
                        <form>
                            <h2>Login</h2>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" required />
                            </div>
                            <button type="submit">Login</button>
                            <p>
                                Don't have an account? <span className="toggle-link" onClick={toggleForm}>Go to Sign Up</span>
                            </p>
                        </form>
                    ) : (
                        <form>
                            <h2>Sign Up</h2>
                            <div>
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" name="password" required />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword">Confirm Password:</label>
                                <input type="password" id="confirmPassword" name="confirmPassword" required />
                            </div>
                            <button type="submit">Sign Up</button>
                            <p>
                                Already have an account? <span className="toggle-link" onClick={toggleForm}>Go to Login</span>
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
}

export default HomeMain;
