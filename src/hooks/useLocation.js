import { useState } from 'react';
import axios from 'axios';

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
        const { data } = await axios(
          'https://geolocation-db.com/json/'
        );
        if (data?.latitude && data?.longitude) {
          setLocation({
            latitude: data.latitude,
            longitude: data.longitude
          });
        }
      }
    );
  }
  return location;
};

export default useLocation;
