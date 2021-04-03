import { useCallback, useEffect, useState } from 'react';
import dummyData from 'helpers/dummyData';
import useLocation from './useLocation';

const useTemp = () => {
  const [tempData, setTempData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { longitude, latitude, city } = useLocation();

  useEffect(() => {
    if (latitude && longitude) {
      const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_API_KEY}/${latitude},${longitude}`;

      const fetchData = async () => {
        await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
          .then(response => response.json())
          .then(data => setTempData(data))
          .catch(() => {
            if (process.env.NODE_ENV === 'development') {
              setTempData(dummyData);
            }
            setError(true);
          });
        setLoading(false);
      };

      fetchData();
    }
  }, [latitude, longitude]);

  const setDummy = useCallback(() => {
    setTempData(dummyData);
    setError(false);
  }, []);

  return { city, loading, error, setDummy, ...tempData };
};

export default useTemp;
