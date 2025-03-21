import axiosInstance from '@/src/axios/axiosInstance';
import { userRegistrationPayload } from '../interfaces/Frontend/authInterface';

export const registerUserService = async (payload: userRegistrationPayload) => {
  try {
    const response = await axiosInstance.post(`api/user/register`, payload);
    return { data: response.data, error: false };
  } catch {
    return { data: {}, error: true };
  }
};
