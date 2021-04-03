import { useState } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState({});
  if (!(location?.latitude && location?.longitude)) {
    navigator.geolocation.getCurrentPosition(
      e => {
        const { coords } = e;
        const { latitude, longitude } = coords;
        setLocation({ latitude, longitude });
      },
      async () => {
        const result = await fetch(
          'https://geolocation-db.com/json/'
        )
          .then(response => response.json())
          .then(data => data);
        if (result?.latitude && result?.longitude) {
          setLocation({
            latitude: result.latitude,
            longitude: result.longitude
          });
        }
      }
    );
  }
  return location;
};

export default useLocation;
