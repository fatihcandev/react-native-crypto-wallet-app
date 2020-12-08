import { AppContext } from 'context';
import React, { useContext } from 'react';

import Notification from './Notification';

const NotificationHandler = () => {
  const { state } = useContext(AppContext);

  const { notification } = state;

  if (notification) {
    const { type, message } = notification;
    return type && message ? <Notification {...{ type, message }} /> : null;
  } else {
    return null;
  }
};

export default NotificationHandler;
