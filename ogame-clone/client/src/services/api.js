import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const fetchGameData = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/game/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const createPlanet = async (planetData) => {
    try {
        const response = await axios.post(`${API_URL}/game/planets`, planetData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Add more API functions as needed for your game logic.