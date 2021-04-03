import { useEffect, useState } from 'react';
import dummyData from 'helpers/dummyData';
import useLocation from './useLocation';

const proxy = 'https://cors-anywhere.herokuapp.com/';

const useTemp = () => {
  const [tempData, setTempData] = useState();
  const { longitude, latitude, city } = useLocation();

  useEffect(() => {
    if (latitude && longitude) {
      let url = `https://api.darksky.net/forecast/${process.env.REACT_APP_API_KEY}/${latitude},${longitude}`;
      if (process.env.NODE_ENV === 'development') {
        url = proxy + url;
      }
      const fetchData = async () => {
        await fetch(url)
          .then(response => response.json())
          .then(data => setTempData(data))
          .catch(() => {
            if (process.env.NODE_ENV === 'development') {
              setTempData(dummyData);
            }
          });
      };

      fetchData();
    }
  }, [latitude, longitude]);
  console.log(tempData);
  return { ...tempData, city };
};

export default useTemp;
