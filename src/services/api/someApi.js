import axios from 'axios';

const baseURL = 'https://api.example.com';

export async function fetchData() {
    try {
        const response = await axios.get(`${baseURL}/data`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function postData(newData) {
    try {
        const response = await axios.post(`${baseURL}/data`, newData);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
}
