// hooks/useNotification.ts
import { notification } from 'antd';
import type { NotificationArgsProps } from 'antd';

type NotificationPlacement = NotificationArgsProps['placement'];
type NotificationType = 'success' | 'info' | 'warning' | 'error';

export const useNotification = () => {
  const openNotificationWithIcon = (
    type: NotificationType,
    message: string,
    description: string,
    placement: NotificationPlacement = 'bottomRight'
  ) => {
    notification[type]({
      message,
      description,
      duration: 3,
      placement,
    });
  };

  return { openNotificationWithIcon };
};
