import { makeAutoObservable } from 'mobx';
import { linkRequestInterface } from '../interfaces/Frontend/linksInterfaces';
import {
  createNewLink,
  deleteLink,
  getAllLinksDetails,
} from '../services/linkServices';
import { useNotification } from '../hooks/useNotification';

class LinksStore {
  links: any[] = [];
  isAllLinkLoading: boolean = true;
  searchedLink: string = '';
  counter = 1;
  isLinkDeleteModalOpen = false;
  isLinkAddModalOpen = false;
  selectedLinkIndexforDelete = -1;
  isLinkAddLoading = false;

  increaseCounter = () => {
    this.counter = this.counter + 1;
  };

  constructor() {
    makeAutoObservable(this);
  }

  setLinks = (newLinks: any[]) => {
    this.links = newLinks;
  };

  handleSearchLinkChange = (link: string) => {
    this.searchedLink = link;
  };

  toggleLinkDeleteModalVisibility = () => {
    this.isLinkDeleteModalOpen = !this.isLinkDeleteModalOpen;
  };

  toggleLinkAddModalVisibility = () => {
    this.isLinkAddModalOpen = !this.isLinkAddModalOpen;
    console.log('add open');
  };

  setLinkIndexForDelete = (index: number) => {
    console.log('setting index to', index);
    if (index >= 0) this.selectedLinkIndexforDelete = index;
  };

  handleLinkDelete = async (index: number) => {
    if (this.links.length > index) {
      const response = await deleteLink(this.links[index].id);
      if (!response.error) {
        await this.handleAllLinksFetch();
      } else {
        console.log('Link could not be deleted');
      }
      this.isLinkDeleteModalOpen = false;
    }
  };

  handleNewLinkDetailsEdit = () => {};

  handleLinkAdd = async (linkData: linkRequestInterface) => {
    this.isLinkAddLoading = true;
    const { openNotificationWithIcon } = useNotification();

    const res = await createNewLink(linkData);
    if (!res.error) {
      await this.handleAllLinksFetch();
      this.isLinkAddModalOpen = false;
      openNotificationWithIcon(
        'success',
        'Information',
        'Successfully added link'
      );
    } else {
      openNotificationWithIcon(
        'error',
        'Information',
        'Link could not be added'
      );
    }
    this.isLinkAddLoading = false;
  };

  handleAllLinksFetch = async () => {
    this.isAllLinkLoading = true;
    const res = await getAllLinksDetails();
    if (!res.error && res.data.data) {
      this.links = res.data.data;
      console.log({ links: this.links });
    } else {
      console.log('Error while fetching links');
    }
    this.isAllLinkLoading = false;
  };
}

export default LinksStore;
