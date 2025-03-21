import { usersCollecetionInterface } from '@/src/interfaces/collections/users';
import {
  getUserByEmail,
  getVerifiedUserByEmail,
  createNewUser,
  updateUserByUserId,
} from '../services/userServices';
import logger from '@/services/logger';
import { object } from 'zod';
import { createEmptyUserTemplate } from '../utilities/users';

/**
 * Checks if verified user exists for specified email
 *
 * @param email
 * @returns boolean true if verified user exists false otherwise
 */
export const checkActiveUserExistForEmail = async (email: string) => {
  const user = await getVerifiedUserByEmail(email);
  console.log(user);
  if (user !== null) {
    return true;
  }
  return false;
};

/**
 * Creates or update unverified user
 * @param userDetails
 * @returns true if user created new user or updated unverified user successfully, false if verified user already exists
 */
export const createNewUserOrUpdateUnverifiedUser = async (
  userDetails: usersCollecetionInterface
) => {
  const user = await getUserByEmail(userDetails.email);

  // if not user is there with given mail just create one
  if (JSON.stringify(user) === '{}') {
    const newUser = await createNewUser(userDetails);
    return { isError: false, user: newUser };
  }

  // if verified user already exists
  if (user.isVerified) {
    logger.error(
      `Verified User already exists with the mail addres - ${user.email}`
    );
    return { isError: true, user: user };
  }

  // update existing unverified user
  const updatedUser = await updateUserByUserId(user.id, userDetails);
  return { isError: false, user: updatedUser };
};

export const OAuthSignInController = async (user: {
  name: string;
  email: string;
}) => {
  const userDetails = await getUserByEmail(user.email);
  if (JSON.stringify(userDetails) === '{}') {
    const newuserDetails = {
      ...createEmptyUserTemplate(),
      ...user,
      isVerified: true,
    };
    const newUser = await createNewUser(newuserDetails);
  } else if (userDetails.isVerified === false) {
    const { id, ...newuserDetails } = {
      ...userDetails,
      hashPassword: null,
      isVerified: true,
    };
    await updateUserByUserId(id, {
      ...newuserDetails,
      bankDetails: newuserDetails.bankDetails as JSON | null,
    });
  }
};
