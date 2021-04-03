import { useEffect, useState } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState({});
  const [city, setCity] = useState(null);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${location?.latitude}&longitude=${location?.longitude}&localityLanguage=en`
      )
        .then(response => response.json())
        .then(data => data);
      setCity(result?.locality);
    };
    if (location?.latitude && location?.longitude) {
      fetchData();
    }
  }, [location]);

  return { ...location, city };
};

export default useLocation;
