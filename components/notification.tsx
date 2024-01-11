import React from 'react';
import { useEffect } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const Notification = () => {
  const createNotification = (type: any) => {
    return () => {
      switch (type) {
        case 'custom':
          NotificationManager.info('What gives you 68% likelihood?','',5000);
          break;
      }
    };
  };

  useEffect(()=>{
    console.log('notification began')
    createNotification('custom')();
  },[])

  return (
    <div>
      <NotificationContainer/>
    </div>
  );

}

export default Notification;