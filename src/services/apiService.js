import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const apiService = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const get = async (endpoint, params) => {
    try {
        const response = await apiService.get(endpoint, { params });
        return response.data;
    } catch (error) {
        console.error('GET request error:', error);
        throw error;
    }
};

export const post = async (endpoint, data) => {
    try {
        const response = await apiService.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('POST request error:', error);
        throw error;
    }
};

export const put = async (endpoint, data) => {
    try {
        const response = await apiService.put(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('PUT request error:', error);
        throw error;
    }
};

export const del = async (endpoint) => {
    try {
        const response = await apiService.delete(endpoint);
        return response.data;
    } catch (error) {
        console.error('DELETE request error:', error);
        throw error;
    }
};

export default apiService;