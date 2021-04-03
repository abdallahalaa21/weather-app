import PropTypes from 'prop-types';
import styles from './Error.module.scss';

const Error = ({ onClick }) => (
  <div className={styles.errorContainer}>
    <p className={styles.text}>Something went wrong</p>
    <button
      onClick={onClick}
      type="button"
      className={styles.btn}
    >
      load dummy Data
    </button>
  </div>
);

Error.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Error;
