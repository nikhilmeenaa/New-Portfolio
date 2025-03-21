import { linkInterface } from '@/src/interfaces/collections/link';

/**
 * Creates a link template which has all the fields empty and needed to filled before used somewhere
 * main reason for creating this is, we can provider default values, to certain fields and specified fields
 * will have their provided values
 *
 * @returns
 */

export const createEmptyLinkTemplate = (): linkInterface => {
  const date = new Date();
  return {
    name: '',
    userId: '',
    linkUrl: '',
    noOfVisits: 0,
    adsEnabled: false,
    revenue: 0,
    platform: null,
    analytics: null,
    searchTags: [],
    contentType: null,
    adsConfiguration: null,
    createdAt: date,
    updatedAt: date,
  };
};
