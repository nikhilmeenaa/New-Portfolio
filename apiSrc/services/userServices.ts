import prisma from '@/prisma';
import { usersCollecetionInterface } from '@/src/interfaces/collections/users';
import { omit } from 'lodash';

export const createNewUser = async (userDetails: usersCollecetionInterface) => {
  const newUser = await prisma.users.create({ data: userDetails });
  return newUser;
};

export const getUserByUserId = async (id: string) => {
  const user = await prisma.users.findUnique({
    where: {
      id: id,
    },
  });
  return omit(user, ['hashPassword']);
};

/**
 * there's no omit in this, all the details including hashPassword is included in the user object
 * @param id userId
 * @returns
 */

export const getUserByUserIdExposedDetails = async (id: string) => {
  const user = await prisma.users.findUnique({
    where: {
      id: id,
    },
  });
  return user;
};

/**
 * there's no omit in this, all the details including hashPassword is included in the user object
 * @param email
 * @returns
 */

export const getUserByUserEmailExposedDetails = async (email: string) => {
  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  return user;
};

export const getUserByEmail = async (email: string) => {
  const user = await prisma.users.findUnique({
    where: {
      email: email,
    },
  });
  return omit(user, ['hashPassword']);
};

export const getVerifiedUserByEmail = async (email: string) => {
  const user = await prisma.users.findUnique({
    where: {
      email: email,
      isVerified: true,
    },
  });
  return omit(user, ['hashPassword']);
};

export const updateUserByUserId = async (
  userId: string,
  userDetails: usersCollecetionInterface
) => {
  const user = await prisma.users.update({
    where: { id: userId },
    data: userDetails,
  });
  return omit(user, ['hashPassword']);
};

export const deleteUserByEmail = async (email: string) => {
  return await prisma.users.delete({
    where: { email },
  });
};
