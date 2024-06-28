// frontend/src/services/notificationService.js
import axios from 'axios';
import instance from './axios';
const API_URL = 'http://localhost:5000/api';

const register = (username, password) => {
    return axios.post(`${API_URL}/users/register`, { username, password });
};

const login = (username, password) => {
    return axios.post(`${API_URL}/users/login`, { username, password });
};

const getNotifications = () => {
    return instance.get(`${API_URL}/notifications`);
};

const createNotification = (title, message) => {
    return instance.post(`${API_URL}/notifications`, { title, message });
};

export { register, login, getNotifications, createNotification };
