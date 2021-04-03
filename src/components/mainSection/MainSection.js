import PropTypes from 'prop-types';
import image from 'images/weatherIcons/cloudy.svg';
import styles from './MainSection.module.scss';

const MainSection = ({ data }) => (
  <section className={styles.cityContainer}>
    <div>
      <p className={styles.city}>{data?.city}</p>
      <p className={styles.date}>{data?.date}</p>
      <img
        src={image}
        alt={data?.icon}
        width="97px"
        height="97px"
      />
      <p className={styles.weather}>{data?.weather}</p>
    </div>
    <div>
      <p className={styles.temp}>{data?.temp}&#xb0;</p>
      <p className={styles.minMaxTemp}>
        {data?.maxTemp} &#xb0;/ {data?.minTemp}&#xb0;
      </p>
      <p className={styles.summery}>{data?.summery}</p>
    </div>
  </section>
);

MainSection.propTypes = {
  data: PropTypes.object.isRequired
};

export default MainSection;
