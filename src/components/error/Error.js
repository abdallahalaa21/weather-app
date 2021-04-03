import PropTypes from 'prop-types';
import styles from './Error.module.scss';

const Error = ({ onClick, link }) => (
  <div className={styles.errorContainer}>
    <p className={styles.text}>Something went wrong</p>
    <button
      onClick={onClick}
      type="button"
      className={styles.btn}
    >
      load dummy Data
    </button>
    <p className={styles.secondText}>
      Or open this Link and click at{' '}
      <i>request temporary access</i>
    </p>
    <a className={styles.link} href={link}>
      click here
    </a>
    <p className={styles.secondText}>
      then comeback and refresh
    </p>
  </div>
);

Error.propTypes = {
  onClick: PropTypes.func.isRequired,
  link: PropTypes.string.isRequired
};

export default Error;
