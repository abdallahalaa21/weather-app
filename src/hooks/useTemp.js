import { useEffect, useState } from 'react';
import useLocation from './useLocation';

const proxy = 'https://cors-anywhere.herokuapp.com/';

const useTemp = () => {
  const [tempData, setTempData] = useState();
  const { longitude, latitude } = useLocation();

  useEffect(() => {
    if (latitude && longitude) {
      let url = `https://api.darksky.net/forecast/${process.env.REACT_APP_API_KEY}/${latitude},${longitude}`;
      if (process.env.NODE_ENV === 'development') {
        url = proxy + url;
      }
      const fetchData = async () => {
        const result = await fetch(url)
          .then(response => response.json())
          .then(data => data);
        setTempData(result);
      };

      fetchData();
    }
  }, [latitude, longitude]);

  return tempData;
};

export default useTemp;
