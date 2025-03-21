'use client';

import DashboardScreen from '@/src/screens/dashboard/index';
import { observer } from 'mobx-react';

const DashBoard = () => {
  return <DashboardScreen />;
};
export default observer(DashBoard);
