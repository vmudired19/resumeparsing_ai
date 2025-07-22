import React, { useState } from 'react';
import axios from 'axios';
// import {useNavigate} from 'react-router-dom';

function Signup({ onSignupSuccess, onSwitchToLogin }) {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  // const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', form);
      setMessage('Signup successful! Please login.');
      onSignupSuccess && onSignupSuccess();
    } catch (err) {
      setMessage('Signup failed: ' + (err.response?.data?.message || 'Unknown error'));
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#f0f2f5'
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          minWidth: '300px',
          maxWidth: '350px',
          width: '100%'
        }}
      >
        <h2 align="center" style={{ color: "black" }}>Sign Up</h2>
        <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required style={{ width: '100%', margin: '8px 0', padding: '8px' }} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required type="email" style={{ width: '100%', margin: '8px 0', padding: '8px' }} />
        <input name="password" placeholder="Password" value={form.password} onChange={handleChange} required type="password" style={{ width: '100%', margin: '8px 0', padding: '8px' }} />
        <button type="submit" style={{ width: '100%', padding: '10px', marginTop: '12px', background: 'blue', color: '#fff', border: 'none', borderRadius: '5px' }}>Sign Up</button>
        <div style={{ marginTop: '10px', textAlign: 'center', color: 'green' }}>{message}</div>
        <div style={{ marginTop: '16px', textAlign: 'center' }}>
          Already have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToLogin }
            style={{
              background: 'none',
              border: 'none',
              color: 'red',
              textDecoration: 'underline',
              cursor: 'pointer',
              padding: 0
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;