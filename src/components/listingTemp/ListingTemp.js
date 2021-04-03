import { useMemo, useState } from 'react';
import ListComponent from 'components/listComponent';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './ListingTemp.module.scss';

const ListingTemp = ({ hourly, daily }) => {
  const [type, setType] = useState('daily');
  const currentData = useMemo(() => {
    if (type === 'daily') {
      return daily;
    }
    const next24temp = [...hourly];
    next24temp.length = 24;
    return next24temp;
  }, [daily, hourly, type]);

  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <button
          type="button"
          onClick={() => setType('hourly')}
          className={cx(
            styles.btnType,
            type === 'hourly' ? styles.btnTypeActive : ''
          )}
        >
          Hourly
        </button>
        <button
          type="button"
          onClick={() => setType('daily')}
          className={cx(
            styles.btnType,
            type === 'daily' ? styles.btnTypeActive : ''
          )}
        >
          Daily
        </button>
      </div>
      <div className={styles.listingContainer}>
        {currentData?.map(data => (
          <ListComponent
            key={data?.time}
            data={data}
            type={type}
          />
        ))}
      </div>
    </div>
  );
};

ListingTemp.propTypes = {
  hourly: PropTypes.array.isRequired,
  daily: PropTypes.array.isRequired
};
export default ListingTemp;
