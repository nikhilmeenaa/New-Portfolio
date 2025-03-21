'use client';

import ProfileScreen from '@/src/screens/profile';
import { observer } from 'mobx-react';

const DashBoard = () => {
  return <ProfileScreen />;
};
export default observer(DashBoard);
