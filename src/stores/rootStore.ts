import LinksStore from './linksStore';
import UserStore from './userStore';

const linksStore = new LinksStore();
const userStore = new UserStore();

export const RootStore = {
  linksStore,
  userStore,
};
