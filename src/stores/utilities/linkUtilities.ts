import { linkRequestInterface } from '@/src/interfaces/Frontend/linksInterfaces';

export function createEmptyLinkRequestData(): linkRequestInterface {
  return {
    name: '',
    linkUrl: '',
    adsEnabled: false,
    platform: '',
    searchTags: [],
    contentType: '',
    adsConfiguration: null,
  };
}
