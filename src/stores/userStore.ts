import { makeAutoObservable } from 'mobx';
import { userResponseInterface } from '../interfaces/Frontend/usersInterfaces';
import { getUserDetails } from '../services/usersServices';
import { useNotification } from '../hooks/useNotification';

class UserStore {
  userDetails: userResponseInterface | null = null;
  isUserDetailsLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchUserDetails = async () => {
    const response = await getUserDetails();
    this.isUserDetailsLoading = true;
    const { openNotificationWithIcon } = useNotification();
    if (!response.error) {
      this.userDetails = response.data;
    } else {
      openNotificationWithIcon(
        'error',
        'Information',
        'Could not fetch user details'
      );
    }
    this.isUserDetailsLoading = false;
  };
}

export default UserStore;
