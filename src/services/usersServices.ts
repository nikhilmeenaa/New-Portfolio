import axiosInstance from '../axios/axiosInstance';
import { usersRequestInterface } from '../interfaces/Frontend/usersInterfaces';

export const getUserDetails = async () => {
  try {
    const response = await axiosInstance.get('/api/user');
    return { data: response.data.data, error: false };
  } catch (err) {
    return { data: {}, error: true };
  }
};

export const updateUserDetails = async (userDetails: usersRequestInterface) => {
  try {
    const response = await axiosInstance.put('/api/user', userDetails);
    return { data: response, error: false };
  } catch (err) {
    return { data: {}, error: true };
  }
};
