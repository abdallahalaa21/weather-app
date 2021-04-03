import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { DegreeContext } from 'context/tempDegreeContext';
import styles from './ListComponent.module.scss';

const formateDate = ({ time, type }) => {
  const date = new Date(time * 1000);
  if (type === 'daily') {
    return date.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric'
    });
  }
  return date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
};

const ListComponent = ({ data, type, now }) => {
  const { formatTemp } = useContext(DegreeContext);
  return (
    <div className={styles.componentContainer}>
      <p className={styles.time}>
        {now
          ? 'Now'
          : formateDate({ time: data?.time, type })}
      </p>
      <img
        src={`https://darksky.net/images/weather-icons/${data?.icon}.png`}
        alt={data?.summary}
        width="66px"
        height="66px"
      />
      {type === 'daily' ? (
        <p className={styles.degree}>
          {formatTemp(data?.apparentTemperatureMax)} &#xb0;/{' '}
          {formatTemp(data?.apparentTemperatureMin)}
          &#xb0;
        </p>
      ) : (
        <p className={styles.degree}>
          {formatTemp(data?.temperature)}&#xb0;
        </p>
      )}
    </div>
  );
};

ListComponent.propTypes = {
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  now: PropTypes.bool.isRequired
};
export default ListComponent;
