import { useContext } from 'react';
import { StoreContext } from '../contexts/rootContext';

export const useStore = () => {
  return useContext(StoreContext);
};
