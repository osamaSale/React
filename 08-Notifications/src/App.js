// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import { register, login, getNotifications, createNotification } from './services/notificationService';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  const [notifications, setNotifications] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');
  useEffect(() => {
  
    if (token) {
      fetchNotifications();
      socket.on('new-notification', (notification) => {
        setNotifications((prevNotifications) => [notification, ...prevNotifications]);
      });

      return () => {
        socket.off('new-notification');
      };
    }
  }, [token]);

  const fetchNotifications = async () => {
    const { data } = await getNotifications();
    setNotifications(data);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await register(username, password);
      alert('User registered successfully');
    } catch (err) {
      alert('Registration failed');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(username, password);
      localStorage.setItem('token', data.token)
      alert('Login successful');
    } catch (err) {
      alert('Login failed');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNotification(title, message);
    setTitle('');
    setMessage('');
  };

  return (
    <div className="App">
      <h1>User Notifications</h1>
      {!token ? (
        <div>
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit">Register</button>
          </form>
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Notifications</h2>
          <ul>
            {notifications.map((notification) => (
              <li key={notification.id}>
                <h2>{notification.title}</h2>
                <p>{notification.message}</p>
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              required
            />
            <button type="submit">Add Notification</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
