import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1';

export const registerComplaint = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/complaint/register-complaint`, formData );
    return response.data;
  } catch (error) {
    throw error;
  }
};