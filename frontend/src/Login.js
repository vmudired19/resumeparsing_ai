import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLoginSuccess }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      setMessage('Login successful!');
      onLoginSuccess();
    } catch (err) {
      setMessage('Login failed: ' + (err.response?.data?.message || 'Unknown error'));
    }
  };

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <h2>Login</h2>
  //     <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
  //     <input name="password" placeholder="Password" value={form.password} onChange={handleChange} required type="password" />
  //     <button type="submit">Login</button>
  //     <div>{message}</div>
  //   </form>
  // );

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
        <h2 align="center" style={{ color: "black" }}>Login</h2>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          style={{ width: '100%', margin: '8px 0', padding: '8px' }}
        />
        <input
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          type="password"
          style={{ width: '100%', margin: '8px 0', padding: '8px' }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '12px',
            background: 'blue',
            color: '#fff',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Login
        </button>
        
        <div style={{ marginTop: '10px', textAlign: 'center', color: 'green' }}>{message}</div>
      </form>
    </div>
  );
}

export default Login;