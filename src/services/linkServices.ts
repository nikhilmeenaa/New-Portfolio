import axiosInstance from '@/src/axios/axiosInstance';
import { linkRequestInterface } from '../interfaces/Frontend/linksInterfaces';

export const getAllLinksDetails = async () => {
  try {
    const response = await axiosInstance.get('api/links');
    return { data: response.data, error: false };
  } catch {
    return { data: {}, error: true };
  }
};

export const createNewLink = async (linkDetails: linkRequestInterface) => {
  try {
    const response = await axiosInstance.post('api/link', linkDetails);
    return { data: response.data, error: false };
  } catch {
    return { data: {}, error: true };
  }
};

export const deleteLink = async (linkId: string) => {
  try {
    const response = await axiosInstance.delete(`api/link/${linkId}`);
    return { data: response.data, error: false };
  } catch {
    return { data: {}, error: true };
  }
};
