import {
  getUserByUserIdExposedDetails,
  updateUserByUserId,
} from '../services/userServices';
import {
  createNewUserVerification,
  getVerificationDetailsById,
  updateUserVerificationById,
} from '../services/userVerificationServices';

interface verifyByInstanceIdResponseType {
  isError: boolean;
  message: string;
}

/**
 * Generates a new verification instance based on the user id
 * provides a timelin to verification
 *
 * @param userId
 * @returns
 */
export const generateEmailVerificationInstance = async (userId: string) => {
  const date = new Date();
  // one day later time from creation date
  const oneDayLaterDate = new Date(date.getTime() + 24 * 60 * 60 * 1000);
  const verificationDetails = {
    userId: userId,
    createdAt: date,
    validTill: oneDayLaterDate,
    validated: false,
  };
  return await createNewUserVerification(verificationDetails);
};

/**
 * Verifies user by the verificationId which represents primary key one of the document in user_verification collection
 *
 * checks if user is already verified, if verifation details exits, sets the verification status of user to true
 *
 * @param verificationId
 * @returns {isError: boolean, message: string}
 */

export const verifyByInstanceId = async (verificationId: string) => {
  const verificationDetails = await getVerificationDetailsById(verificationId);

  // if there's no verification details found
  if (!verificationDetails)
    return {
      isError: true,
      message: 'No associated verification details found',
    };

  const userDetails = await getUserByUserIdExposedDetails(
    verificationDetails.userId
  );

  // if user is already verified
  if (userDetails?.isVerified) {
    return {
      isError: true,
      message: 'Account already verified',
    };
  }

  // updating isVerified field
  if (userDetails) {
    const { id, ...userNewDetails } = userDetails;
    await updateUserByUserId(id, {
      ...userNewDetails,
      isVerified: true,
      bankDetails: userNewDetails.bankDetails as JSON | null,
    });
    // update verficationDetail, update validated to be true
    const { id: verificationObjectId, ...updatedVerificationDetails } =
      verificationDetails;
    updatedVerificationDetails.validated = true;
    await updateUserVerificationById(
      verificationDetails.id,
      updatedVerificationDetails
    );

    return { isError: false, message: 'Successfully verified' };
  }

  // if userDetails not found
  return {
    isError: true,
    message: 'No associated verification details found',
  };
};
