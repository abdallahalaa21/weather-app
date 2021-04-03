import { useContext } from 'react';
import { DegreeContext } from 'context/tempDegreeContext';
import PropTypes from 'prop-types';
import styles from './MainSection.module.scss';

const formateDate = time => {
  const date = new Date(time * 1000);

  return date.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const MainSection = ({ data }) => {
  const { formatTemp } = useContext(DegreeContext);

  return (
    <section className={styles.cityContainer}>
      <div>
        <p className={styles.city}>{data?.city}</p>
        <p className={styles.date}>
          {' '}
          {formateDate(data?.time)}
        </p>
        <img
          src={`https://darksky.net/images/weather-icons/${data?.icon}.png`}
          alt={data?.summary}
          width="97px"
          height="97px"
        />
        <p className={styles.weather}>{data?.summary}</p>
      </div>
      <div>
        <p className={styles.temp}>
          {formatTemp(data?.temperature)}&#xb0;
        </p>
        <p className={styles.minMaxTemp}>
          {formatTemp(data?.today?.apparentTemperatureMax)}{' '}
          &#xb0;/{' '}
          {formatTemp(data?.today?.apparentTemperatureMin)}
          &#xb0;
        </p>
        <p className={styles.summary}>
          {data?.today?.summary}
        </p>
      </div>
    </section>
  );
};

MainSection.propTypes = {
  data: PropTypes.object.isRequired
};

export default MainSection;
