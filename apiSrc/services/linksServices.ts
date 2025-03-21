import prisma from '@/prisma';
import { linkInterface } from '@/src/interfaces/collections/link';

export const createNewLink = async (linkDetails: linkInterface) => {
  const createdLink = await prisma.link.create({ data: linkDetails });
  return createdLink;
};

export const getLinkById = async (linkId: string) => {
  return await prisma.link.findUnique({ where: { id: linkId } });
};

export const getAllLinksForUserId = async (userId: string) => {
  return await prisma.link.findMany({ where: { userId: userId } });
};

export const getLinksByIdAndUserId = async (linkId: string, userId: string) => {
  return await prisma.link.findMany({
    where: { id: linkId, userId: userId },
  });
};

export const updateALink = async (
  linkId: string,
  linkDetails: linkInterface
) => {
  const updatedLink = await prisma.link.update({
    where: { id: linkId },
    data: linkDetails,
  });
  return updateALink;
};

export const updateLinksByIdAndUserId = async (
  linkId: string,
  userId: string,
  linkDetails: linkInterface
) => {
  return await prisma.link.updateMany({
    where: { id: linkId, userId: userId },
    data: linkDetails,
  });
};

export const deleteLinkById = async (linkId: string) => {
  return await prisma.link.delete({ where: { id: linkId } });
};

export const deleteLinksByIdAndUserId = async (
  linkId: string,
  userId: string
) => {
  return await prisma.link.deleteMany({
    where: { id: linkId, userId: userId },
  });
};
