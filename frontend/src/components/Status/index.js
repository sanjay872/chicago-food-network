import React, { useState } from 'react';
import Chat from '../Chat/index';

const Status = ({ userId }) => {
  const [isOnline, setIsOnline] = useState(false);
  const [location, setLocation] = useState(null);

  const handleStatusChange = () => {
    const newStatus = !isOnline; // Toggle status
    setIsOnline(newStatus);
    if (newStatus) {
      // Ask for location and send status and location to backend
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          sendStatusToBackend(newStatus, { latitude, longitude });
        });
      }
    } else {
      // Send status to backend
      sendStatusToBackend(newStatus);
    }
  };

  const sendStatusToBackend = (status, location) => {
    const apiUrl = "http://localhost:8080/re/status";

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status,
        location,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to send status to backend');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Status sent successfully:', data);
      })
      .catch((error) => {
        console.error('Error sending status to backend:', error);
      });
  };

  return (
    <div>
      <h2>Status</h2>
      <label>
        Status: {isOnline ? 'Online' : 'Offline'}
        <button onClick={handleStatusChange}>
          {isOnline ? 'Go Offline' : 'Go Online'}
        </button>
      </label>
      {isOnline && location && (
        <>
          <p>Location: {location.latitude}, {location.longitude}</p>
          <Chat userId={userId} />
        </>
      )}
    </div>
  );
};

export default Status;