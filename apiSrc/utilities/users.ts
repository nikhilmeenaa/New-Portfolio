import { usersCollecetionInterface } from '@/src/interfaces/collections/users';

export const createEmptyUserTemplate = (): usersCollecetionInterface => {
  const date = new Date();
  return {
    name: '',
    email: '',
    hashPassword: null,
    isVerified: false,
    createdAt: date,
    updatedAt: date,
    phoneNo: null,
    countryCode: null,
    photoId: null,
    bankDetails: null,
    balance: 0,
  };
};
