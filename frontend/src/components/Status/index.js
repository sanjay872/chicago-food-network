import React, { useEffect, useState } from 'react';
import Chat from '../Chat/index';

const Status = ({ userId }) => {
    const [status, setStatus] = useState(false);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              let lat = position.coords.latitude;
              let lon = position.coords.longitude;
              setLatitude(lat);
              setLongitude(lon);
            })
        }
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault();
        let id = localStorage.getItem('rec-id'); 
        let data = {
            status: !status,
            lat: latitude,
            lon: longitude,
        }
        setStatus((prev) => !prev.status)
    
        fetch(`http://localhost:8080/re/status?id=${id}&status=${!status}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((response) => {
        })
          // .then((response) => response.json())
          // .then((data) => {
          //   setResponse(data);
          // })
          .catch((error) => {
            console.error("Error:", error);
          });
      };
    return (
        <div>
            {status && (<button onClick={handleSubmit}>Offline</button>)}
             {!status && (<button onClick={handleSubmit}>Online</button>)}
        </div>
    )
};

export default Status;