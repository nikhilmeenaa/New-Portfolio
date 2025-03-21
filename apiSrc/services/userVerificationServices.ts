import prisma from '@/prisma';
import { userVerificationInterface } from '@/src/interfaces/collections/userVerification';

export const getVerificationDetailsById = async (id: string) => {
  return await prisma.user_verification.findUnique({
    where: { id: id },
  });
};

export const createNewUserVerification = (
  userVerificationDetails: userVerificationInterface
) => {
  const createdVerification = prisma.user_verification.create({
    data: userVerificationDetails,
  });
  return createdVerification;
};

export const updateUserVerificationById = async (
  id: string,
  verificationDetails: userVerificationInterface
) => {
  const updatedVerification = await prisma.user_verification.update({
    where: { id: id },
    data: verificationDetails,
  });
  return updatedVerification;
};
