import redisClient from '@/redis/redisClient';
import { getLinkById } from '@/apiSrc/services/linksServices';

/**
 *
 * Get a link of the url by it's id, if it cached in redis will get it from there, if not will
 * get it from db, then will cache it in redis
 *
 * @param linkId
 * @returns
 */

export const getLinKUrlByLinkId = async (linkId: string) => {
  const redisCachedLinkUrl = await redisClient.get(linkId);
  if (redisCachedLinkUrl) {
    console.log('found in redis 🌸');
    return redisCachedLinkUrl;
  }
  console.log('not found in redis');
  const linkDetails = await getLinkById(linkId);
  if (linkDetails?.linkUrl) await redisClient.set(linkId, linkDetails?.linkUrl);
};
