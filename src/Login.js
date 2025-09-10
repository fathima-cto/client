import React, { useState } from 'react';
import './Login.css';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      alert('Login successful!');
    } catch (err) {
      setError(err.message);
    }
  };

// Import professional icons from react-icons

return (
    <div className="login-root">
        <div className="login-left">
            <div className="floneo-title">FloNeo</div>
            <div className="floneo-sub">Build-Automate-Scale</div>
            <div className="floneo-start">
                <div className="floneo-start-text">Start Build your<br/>Application</div>
                <div className="floneo-triangle" />
            </div>
        </div>
        <div className="login-right">
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-header">User Login</div>
                <label className="login-label">User Name</label>
                <div className="login-input-wrapper">
                    <span className="login-icon"><FaEnvelope /></span>
                    <input
                        type="email"
                        placeholder="email ID"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        className="login-input"
                    />
                </div>
                <label className="login-label">Password</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    className="login-input"
                />
                <div className="login-options">
                    <label>
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={e => setRemember(e.target.checked)}
                        />
                        Remember Me
                    </label>
                    <span className="login-forgot">Forget Password?</span>
                </div>
                {error && <div className="login-error">{error}</div>}
                <button className="login-btn" type="submit">Login</button>
            </form>
            <div className="login-socials">
                <span className="login-social-icon"><FaTwitter /></span>
                <span className="login-social-icon"><FaFacebookF /></span>
                <span className="login-social-icon"><FaLinkedinIn /></span>
            </div>
        </div>
    </div>
);
};

export default Login;
